//Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
// Using the lower case function
console.log("Testing with lower case:");
let Apple : string= "apple";
console.log(Apple.toLowerCase() =='apple')//true
// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" =='apple')//true
console.log("Apples" == "Apples")//true
// Numerical tests
console.log("Numerical tests:");
console.log(5 < 0)//false
console.log(6 > 0)//true
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(false && true)//false
console.log(false || true) //true
// Test whether an item is in a array
let names: string []=["Sunny", "Albert einstein", " Bill Gates"]
console.log("is Sunny is true")
console.log(names.includes("Sunny"));//true
console.log(names.includes("Hello World"))//false
// Test whether an item is not in a array
console.log("is 'albert einstein' is a scientist")
console.log(!names.includes("albert einstein"))//true


