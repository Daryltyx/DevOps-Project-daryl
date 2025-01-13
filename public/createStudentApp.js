document.getElementById("createStudentForm").addEventListener("submit", async function(event) {
    event.preventDefault(); // Prevent form from reloading the page

    // Get the form data
    const studentID = document.getElementById("studentID").value;
    const name = document.getElementById("name").value;

    const responseMessageElement = document.getElementById("responseMessage");

    try {
        // Send a POST request to the backend
        const response = await fetch("http://localhost:5050/students", { // Use full URL if backend is on a different origin
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ studentID, name })
        });

        // Check if response is okay and parse the JSON
        if (response.ok) {
            const result = await response.json();
            // Display success message
            responseMessageElement.textContent = result.message || "Student created successfully.";
            responseMessageElement.style.color = "green";

            // Clear the form inputs if the student was created successfully
            document.getElementById("createStudentForm").reset();
        } else {
            // Handle non-200 responses
            const errorResult = await response.json();
            responseMessageElement.textContent = errorResult.error || "An error occurred.";
            responseMessageElement.style.color = "red";
        }
    } catch (error) {
        console.error("Error:", error);
        responseMessageElement.textContent = "An error occurred. Please try again.";
        responseMessageElement.style.color = "red";
    }

    // Ensure the response message is always visible
    responseMessageElement.style.display = "block";
});
