// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.
function swapping_variables() {
    var a = 22, b = 23;
    console.log("before swap: a= ", a, "b=", b);
    var swap = a;
    a = b;
    b = swap;
    console.log("after swap: a=", a, "b=", b);
}
swapping_variables();
