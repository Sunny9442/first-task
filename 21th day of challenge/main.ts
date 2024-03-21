// Question 62: Making a Student Template: Create a blueprint for student information, including their name, age, and the classes they're taking, and then fill in this blueprint with an example student.
interface student {
    names : string
    age : number
    class : number
    courses : string[]
}
let student_template : student ={
    names : "Sunny Shahzad", 
    age : 22,
    class : 14,
    courses : ["Math ", "Science ", "History"]  
}
console.log(student_template)



interface  students {
    names : string
    class : number
    Business : string 
    age : number 
}
let students_template: students ={
    names : "Hamza Rasheed",
    class : 14,
    Business : "Wood work",
    age : 23
}
console.log(students_template)
