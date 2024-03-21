// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
var average_grade = [88, 99, 75, 88, 36, 77];
var overall_average = average_grade.reduce(function (total, grade) { return total + grade; }) / average_grade.length;
console.log(overall_average);
