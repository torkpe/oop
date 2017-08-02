class Student{
  constructor(name,level){
    this.name=name;
    this.level=level;

  }
  getStudent(){
    //checking for invalid inputs by reducing if statements
    let newName=this.name.trim()
    if((this.level && newName)&&(typeof(this.level)==="number")&&(typeof(newName)==="string")){
      return `Student's name:${this.name} 
            Student's level:${this.level}
            `
    }else{
      return "`Level` or `name` should be of `number` or `string` type and should not be empty"
    }
  }
}
class GradeStudent extends Student{
  constructor(name,level,score){
    super(name,level);
    this.grade=score
  }
  getGrade(){
    //checking for invalid inputs
    let newName=this.name.trim()
    if((this.level && newName)&&(typeof(this.level)==="number")&&(typeof(newName)==="string")&&(typeof(this.score)==="number")){
      if(this.grade<45){
        return( 
        ` ${this.name} cannot be promoted to the next level
          Reason:${this.name}'s Score is below Average Performance
          Advice:${this.name} should repeat the current level
          Score:${this.score}
          Level:${this.level}
        `)
      }
      if(45<this.grade && this.grade<=70){
        return (
        ` ${this.name} is Promoted
          Reason:${this.name}'s Score is Above Average Performance
          Advice:${this.name} can still do better
          Score:${this.score}
          New Level:${this.level+1}
        `)
      }
      if(70<this.grade && this.grade<100){
        return (
        ` ${this.name} is double Promoted
          Reason:${this.name}'s Score exceeds expected Performance
          Advice:${this.name} can do better if challenge
          Score:${this.score}
          New Level:${this.level+2}
        `)
      }
    }else{
      return "`Level` `name` or `score` should be of `number` `string` or `number` type"
    }
  }
}
module.exports={
  Student, GradeStudent
}