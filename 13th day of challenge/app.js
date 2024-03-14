// Question 37: Large Shirts: Default values in make_shirt().
function makes_shirt(size, message) {
    if (size === void 0) { size = "Double Excel"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("Taking the shirt ".concat(size, " t-shirt with the message ").concat(message, " PRINTED ON IT"));
}
makes_shirt(); //default messag
makes_shirt("Double excel");
makes_shirt("Small", "Coding is my life");
