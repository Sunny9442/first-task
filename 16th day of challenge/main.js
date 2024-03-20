// Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year, use array destructuring to assign the first and second laptops to variables. Then, log these variables.
var laptops = [
    { make: "Hp", Model: "Elitebook g3 820", year: 2018 },
    { make: "Dell", Model: "XPS 15", year: 2021 },
    { make: "HP", Model: "Elitebook G5 840", year: 2020 },
    { make: "Apple", model: "MacBook Pro", year: 2020 }
];
var laptop1 = laptops[0], laptop2 = laptops[1], laptop3 = laptops[2], laptop4 = laptops[3];
console.log(laptop1);
console.log(laptop2);
console.log(laptop3);
console.log(laptop4);
