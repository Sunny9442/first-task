// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
function Dividing_finding(dividing, finding) {
    var quotient = Math.floor(dividing / finding);
    var remainder = dividing % finding;
    return { quotient: quotient, remainder: remainder };
}
console.log(Dividing_finding(10, 3));
