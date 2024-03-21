// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
let average_grade = [88 , 99 , 75 , 88 , 36 , 77 ]
let overall_average = average_grade .reduce ((total , grade) => total + grade ) / average_grade.length
console.log(overall_average)