// Question 51: Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and refactor it into an arrow function.
function calculates (width : number , height : number ): number{
    return width * height;
}
let calculatesarea = (width : number , height : number ) : number=> width * height;
console.log(calculatesarea (10 , 10))