document.getElementById("createStudentForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form from reloading the page
  
    const studentID = document.getElementById("studentID").value.trim();
    const name = document.getElementById("name").value.trim();
    const responseMessage = document.getElementById("responseMessage");
  
    // Reset the response message
    responseMessage.textContent = "";
    responseMessage.style.visibility = "hidden"; // Reset to hidden initially
  
    try {
      // Validate form fields before sending the request
      if (!studentID || !name) {
        responseMessage.textContent = "Student ID and name are required.";
        responseMessage.style.visibility = "visible"; // Ensure visibility for error
        responseMessage.style.color = "red"; // Indicate error visually
        return;
      }
  
      // Send a POST request to the backend
      const response = await fetch("/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ studentID, name }),
      });
  
      const result = await response.json();
  
      // Display the result message
      responseMessage.textContent = response.ok
        ? result.message
        : result.error;
  
      responseMessage.style.visibility = "visible"; // Ensure visibility
      responseMessage.style.color = response.ok ? "green" : "red"; // Green for success, red for error
  
      // Clear the form inputs if the student was created successfully
      if (response.ok) {
        document.getElementById("createStudentForm").reset();
      }
    } catch (error) {
      console.error("Error:", error);
      responseMessage.textContent = "An error occurred. Please try again.";
      responseMessage.style.visibility = "visible"; // Ensure visibility for errors
      responseMessage.style.color = "red"; // Indicate error visually
    }
  });
  