class Student{
    constructor(firstName,lastName, birthday, subjectMarks){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.subjectMarks = subjectMarks;
    }
}
let u1 = new Student('Davyd', 'Saifutdinov', new Date('2008-29-01'), 12);
console.log (u1);
class Group{
    students = [];
    constructor(monitor, students, teacher){
        this.monitor = monitor;
        this.students = students;
        this.teacher = teacher;
    }
    calcAverageMarks(){
        let result = 0
        for (let i = 0; i < this.students.length; i++){
            result += this.students[i].subjectMarks;
        }
        return result/this.students.length;
    }
}
let u2 = new Student('Vlad', 'Taliyan', new Date('2008-21-07'), 1)
let u3 = new Student('Daniel', 'Fedelesh', new Date('2007-03-11'), 1)
let g1 = new Group(u1, [u1,u2,u3], u3);

console.log(g1.calcAverageMarks())
