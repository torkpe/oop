class Student{
  constructor(name,level){
    this.name=name;
    this.level=level;
    
  }
  getStudent(){
    if(typeof(this.level)==="number"){
      return `Student's name:${this.name} 
            Student's level:${this.level}
            `
    }else{
      return "Level should be of number type"
    }
  }
}
class GradeStudent extends Student{
  constructor(name,level,score){
    super(name,level);
    this.grade=score
  }
  getGrade(){
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
  }
}
module.exports={
  Student, GradeStudent
}