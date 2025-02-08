const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const statusMonitor = require("express-status-monitor");
const logger = require("./Util/logger"); // Importing Winston logger

const app = express();
const PORT = process.env.PORT || 5050;
const dbPath = path.join(__dirname, "utils/db.json");

// ✅ 1. Place Status Monitor Middleware BEFORE all routes
app.use(statusMonitor()); 
app.get("/status", statusMonitor().pageRoute); // ✅ Explicitly expose the status page

// Middleware setup
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Logging all requests
app.use((req, res, next) => {
  logger.info(`Incoming Request: ${req.method} ${req.url}`);
  next();
});

// Import leave application routes from leaveapp.js
const leaveAppRoutes = require("./Util/leaveapp");
app.use("/leave", leaveAppRoutes);

// Serve search.js from the util directory
app.get("/util/search.js", (req, res) => {
  logger.info("Serving search.js file");
  res.sendFile(path.join(__dirname, "Util", "search.js"));
});

// Serve db.json from the data directory
app.get("/data/db.json", (req, res) => {
  logger.info("Serving database JSON file");
  res.sendFile(dbPath);
});

// Import and use the create student route
const createStudentRoute = require("./Util/createStudent");
app.use("/", createStudentRoute);

// Default route to serve the main HTML file
app.get("/", (req, res) => {
  logger.info("Serving main index.html");
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Endpoint to get attendance for a specific lesson
app.get("/api/attendance/:lessonID", (req, res) => {
  const lessonID = parseInt(req.params.lessonID, 10);
  const date = req.query.date;
  const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

  const attendanceRecords = db.attendance.filter(
    (record) => record.lessonID === lessonID && record.date === date
  );

  const attendanceWithNames = attendanceRecords.map((record) => {
    const student = db.students.find((s) => s.studentID === record.studentID);
    return {
      ...record,
      name: student ? student.name : "Unknown",
    };
  });

  logger.info(`Fetched attendance for lesson ID: ${lessonID}, Date: ${date}`);
  res.json(attendanceWithNames);
});

// Endpoint to update attendance status
app.put("/api/attendance/:attendanceID", (req, res) => {
  const attendanceID = parseInt(req.params.attendanceID, 10);
  const newStatus = req.body.status;

  const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));
  const attendanceRecord = db.attendance.find(
    (record) => record.attendanceID === attendanceID
  );

  if (attendanceRecord) {
    attendanceRecord.status = newStatus;
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), "utf-8");
    logger.info(`Updated attendance record ID: ${attendanceID} to status: ${newStatus}`);
    res.json(attendanceRecord);
  } else {
    logger.error(`Attendance record ID ${attendanceID} not found`);
    res.status(404).json({ error: "Attendance record not found" });
  }
});

// Global error handler
app.use((err, req, res, next) => {
  logger.error(`Error: ${err.message}`);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
const server = app.listen(PORT, () => {
  logger.info(`Student Management System is running at http://localhost:${PORT}`);
  console.log(`Student Management System is running at http://localhost:${PORT}`);
});

// Handle fast server shutdown
const shutdownServer = () => {
  logger.info("Shutting down server...");
  server.close(() => {
    logger.info("Server shutdown complete.");
    process.exit(0);
  });

  // If it takes too long, force exit after 3 seconds
  setTimeout(() => {
    logger.warn("Forced shutdown due to timeout.");
    process.exit(1);
  }, 3000);
};

process.on("SIGINT", shutdownServer);
process.on("SIGTERM", shutdownServer);

module.exports = { app, server };
