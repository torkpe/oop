const chai = require("chai");
const assert=chai.assert;
const student= require("../oop.js")
const gradeStudent= require("../oop.js")

let checkError=new student.Student(" ", "2")
let checkError2=new gradeStudent.GradeStudent("doe", 1, " ")
let studentDetail=new student.Student("jane",1)
// check if getStudent function accepts an invalid input
describe("Invalid input(s)", function() {
	describe("You have made an invalid input in getStudent function", () => {
		it("should return `Level` or `name` should be of `number` or `string` type and should not be empty", () => {
			assert.equal(checkError.getStudent(), "`Level` or `name` should be of `number` or `string` type and should not be empty");
		});
	});
})
//check if the getGrade function accepts an invalid input
describe("Invalid input(s)", function() {
	describe("You have made an invalid input in gradeStudent function", () => {
		it("should return `Level` `name` or `score` should be of `number` `string` or `number` type and should not be empty", () => {
			assert.equal(checkError2.getGrade(), "`Level` `name` or `score` should be of `number` `string` or `number` type and should not be empty");
		});
	});
})
//expect student's details
describe("Student's details", function() {
	describe("Return the details of the student", () => {
		it("should return the name and level of student", () => {
			assert.equal(checkError.studentDetail(), `Student's name:${this.name} 
            										Student's level:${this.level}
            										`);
		});
	});
})