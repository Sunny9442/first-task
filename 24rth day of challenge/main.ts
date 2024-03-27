// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.
let names = "Sunny"
names = "Sunny Shahzad"
console.log (names)
 
const age = 22
try {
    age = 22
} catch (error){
    console.log ("error :  Can't reassign a `const`-declared variable.")
}