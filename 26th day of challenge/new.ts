// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.
function example_function (number : number) : number {
    return number * number
}
const example_object = function (number :number): number{
    return number * number
}
console.log(example_function(6))
console.log(example_object(7))
