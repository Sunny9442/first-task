// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
function Dividing_finding (dividing : number , finding : number ) : { quotient : number , remainder : number
}{
    let quotient = Math.floor (dividing / finding)
    let remainder = dividing % finding ;
     return {quotient , remainder} 
}
 console.log(Dividing_finding ( 10 , 3))
