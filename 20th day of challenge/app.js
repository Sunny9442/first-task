// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function calculates() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    var average = items.reduce(function (items, sum) { return items + sum; }, 0);
    return average / items.length;
}
console.log(calculates(99, 45, 45, 67, 89, 92));
