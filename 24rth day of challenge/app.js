// Question 70: Understanding let in Loops: Write a function that uses a loop with the let keyword to print numbers from 1 to 5. Explain how the let keyword affects the visibility of the loop variable.
function loop_variable() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }
}
console.log(loop_variable());
