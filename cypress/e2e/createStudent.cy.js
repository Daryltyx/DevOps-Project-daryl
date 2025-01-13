describe("Create Student Frontend Tests", () => {
  let baseUrl;

  before(() => {
    // Start the server and retrieve the base URL
    cy.task("startServer").then((url) => {
      baseUrl = url;
    });
  });

  after(() => {
    // Stop the server after all tests
    return cy.task("stopServer");
  });

  beforeEach(() => {
    // Visit the addstudent.html page before each test
    cy.visit(`${baseUrl}/addstudent.html`);
  });

  it("should display the Add Student form", () => {
    // Verify that the form and input fields exist
    cy.get("form#createStudentForm").should("exist");
    cy.get("#studentID").should("exist");
    cy.get("#name").should("exist");
    cy.get("form#createStudentForm button[type='submit']").should("exist");
  });

  it("should successfully add a new student", () => {
    // Generate a unique student ID to avoid conflicts
    const uniqueStudentID = `ID-${Date.now()}`;

    // Fill in the form and submit
    cy.get("#studentID").clear().type(uniqueStudentID);
    cy.get("#name").clear().type("John Doe");
    cy.get("form#createStudentForm button[type='submit']").click();

    // Verify success message
    cy.get("#responseMessage", { timeout: 5000 }) // Wait for the message to appear
      .should("be.visible")
      .and("contain.text", "Student created successfully");
  });

  it("should display an error for duplicate student ID", () => {
    // Generate a unique student ID to avoid database conflicts
    const duplicateStudentID = `ID-${Date.now()}`;

    // Add the first student with the duplicate ID
    cy.get("#studentID").clear().type(duplicateStudentID);
    cy.get("#name").clear().type("John Doe");
    cy.get("form#createStudentForm button[type='submit']").click();

    // Verify success message for first addition
    cy.get("#responseMessage", { timeout: 5000 })
      .should("be.visible")
      .and("contain.text", "Student created successfully");

    // Attempt to add the same student again
    cy.get("#studentID").clear().type(duplicateStudentID);
    cy.get("#name").clear().type("Jane Doe");
    cy.get("form#createStudentForm button[type='submit']").click();

    // Verify error message
    cy.get("#responseMessage", { timeout: 5000 }) // Wait for the message to appear
      .should("be.visible")
      .and("contain.text", "Student ID already exists");
  });
});
