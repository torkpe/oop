class Student{
  constructor(name,level){
    this.name=name;
    this.level=level;
  }
}
class GradeStudent extends Student{
  constructor(name,level,score){
    super(name,level);
    this.grade=score
  }
  getDetails(){
    return(`${this.name} is a level ${this.level} student`)
  }
  getGrade(){
    //checking for invalid inputs
    let newName=this.name.trim() //remove white space from beinning of string
    if((this.level && newName &&this.grade)&&(typeof(this.level)==="number")&&
    (typeof(newName)==="string")&&(typeof(this.grade)==="number")){
      if(this.grade<45){
        return(`${this.name} is below average`)
      }
      if(45<this.grade && this.grade<=70){
        return (`${this.name} is above average performance`)
      }
      if(70<this.grade && this.grade<100){
        return (`${this.name} is an excellent student`)
      }
    }else{
      return "`Level` `name` or `score` should be of `number` `string` or `number` type and should not be empty"
    }
  }
}
module.exports={
  Student, GradeStudent
}