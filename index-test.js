const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5050;
const dbPath = path.join(__dirname, "utils/db.json");

// Middleware setup
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the "instrumented" folder
app.use(express.static("./instrumented"));

// Route to serve the `addstudent.html` file explicitly
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/instrumented/", "addstudent.html"));
});

// POST /students: Add a new student
app.post("/students", (req, res) => {
  const { studentID, name } = req.body;

  if (!studentID || !name) {
    return res.status(400).json({ error: "Student ID and name are required" });
  }

  const db = JSON.parse(fs.readFileSync(dbPath, "utf-8"));

  // Check for duplicate studentID
  if (db.students.some((student) => student.studentID === studentID)) {
    return res.status(400).json({ error: "Student ID already exists" });
  }

  // Add the new student
  const newStudent = { studentID, name };
  db.students.push(newStudent);
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), "utf-8");

  res.status(201).json({ message: "Student created successfully" });
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Student Management System is running at http://localhost:${PORT}`);
});

module.exports = { app, server };
