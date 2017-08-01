const chai = require("chai");
const assert=chai.assert;
const student= require("../oop.js")
const gradeStudent= require("../oop.js")

let checkError=new student.Student("doe", "1", 12)
// let jane=new student("doe",2,60)
describe("Get student info", function() {
	describe("check if name is a string", () => {
		it("should return `level must be string`", () => {
			assert.equal(checkError.getStudent(), "Level should be of number type");
		});
	});
})
