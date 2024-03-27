// Question 72: Block Scope with let and const: Demonstrate block scope by creating a code block with {} that uses both let and const. Show how variables declared inside the block are not accessible outside of it.
{
let both = "my name in sunny"
const boths = "my hobby is coding"
console.log (both)
console.log(boths)
}
{
    try {
        console.log (both)
    }catch (error){
        console.log ("`both` is not accessible outside the block.")
    }
}
{
    try {
        console.log (boths)
    }catch (error){
        console.log ("`boths` is not accessible outside the block.")
    }
}