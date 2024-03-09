console.log("Testing with lower case:");
var Apple = "apple";
console.log(Apple.toLowerCase() == 'apple'); //true
console.log("Testing equality with strings:");
console.log("apple" == 'apple'); //true
console.log("Apples" == "Apples"); //true
// Numerical tests
console.log("Numerical tests:");
console.log(5 < 0); //false
console.log(6 > 0); //true
console.log("Tests with 'and' and 'or':");
console.log(false && true); //false
console.log(false || true); //true
var names = ["Sunny", "Albert einstein", " Bill Gates"];
console.log("is Sunny is true");
console.log(names.includes("Sunny")); //true
console.log(names.includes("Hello World")); //false
console.log("is 'albert einstein' is a scientist");
console.log(!names.includes("albert einstein"));
