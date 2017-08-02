const chai = require("chai");
const assert=chai.assert;
const student= require("../oop.js")
const gradeStudent= require("../oop.js")

let checkError=new student.Student("doe", "1", 12)
let checkError2=new student.Student("doe", 1, "12")
// let jane=new student("doe",2,60)
describe("Invalid input(s)", function() {
	describe("You have made an invalid input", () => {
		it("should return '`Level` or `name` should be of `number` or `string` type and should not be empty'", () => {
			assert.equal(checkError.getStudent(), "`Level` or `name` should be of `number` or `string` type and should not be empty");
		});
	});
})

