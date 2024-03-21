// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function special_number(addvalue) {
    return function (number) {
        return number + addvalue;
    };
}
var addhundred = special_number(100);
console.log(addhundred(100000));
