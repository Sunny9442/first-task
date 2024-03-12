// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
// Explain & TIP: Use a loop and an if-else chain to append the correct ordinal suffix to numbers. This introduces you to combining loops with conditional logic for formatting.
var number = [2, 3, 4, 5, 6, 8];
number.forEach(function (number) {
    var suffix = "st";
    if (number === 1) {
        suffix = "th";
    }
    else if (number === 3) {
        suffix = "nd";
    }
    else if (number === 5) {
        suffix = " kt";
    }
    console.log("".concat(number, " ").concat(suffix));
});
