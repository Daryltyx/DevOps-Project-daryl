const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, server } = require('../index');
const fs = require('fs');
const path = require('path');

chai.use(chaiHttp);
const { expect } = chai;

const dbPath = path.join(__dirname, '../data/db.json');

describe('Create Student API Tests', () => {
  beforeEach(() => {
    // Reset database to a known state before each test
    const initialData = {
      students: [],
      classes: [],
      enrollment: [],
      attendance: [],
      leaveApplications: []
    };
    fs.writeFileSync(dbPath, JSON.stringify(initialData, null, 2));
  });

  after(() => {
    server.close();
  });

  it('should create a new student successfully', (done) => {
    const newStudent = { studentID: 1, name: 'Test Student' };
    chai.request(app)
      .post('/students')
      .send(newStudent)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body.student).to.deep.equal(newStudent);
        expect(res.body.message).to.equal('Student created successfully');

        // Verify the student is in the database
        const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
        expect(db.students).to.deep.include(newStudent);

        done();
      });
  });

  it('should not create a student with missing fields', (done) => {
    chai.request(app)
      .post('/students')
      .send({ name: 'Incomplete Student' }) // Missing studentID
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal('studentID and name are required');
        done();
      });
  });

  it('should not create a student with an existing ID', (done) => {
    const existingStudent = { studentID: 1, name: 'Existing Student' };
    const db = { students: [existingStudent], classes: [], enrollment: [], attendance: [], leaveApplications: [] };
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    chai.request(app)
      .post('/students')
      .send(existingStudent)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.error).to.equal('Student ID already exists');
        done();
      });
  });
});
