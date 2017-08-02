const chai = require("chai");
const assert=chai.assert;
const gradeStudent= require("../oop.js")

let studentGrade=new gradeStudent.GradeStudent("doe", 1,59)
let studentDetail=new gradeStudent.GradeStudent("doe", 1,59)
//expect student's details
describe("Student's details:", () => {
	describe("If valid,", () => {
		it("should return details of student", () => {
			assert.equal(studentDetail.getDetails(),`doe is a level 1 student`);
		});
	});
})
//expect student's grade details
describe("Student's grade details:", function() {
	describe("if valid,", () => {
		it("should return the details of student's performance", () => {
			assert.equal(studentGrade.getGrade(), `doe is above average performance`);
		});
	});
})