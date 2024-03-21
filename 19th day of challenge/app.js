// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
var mix_arrays = [2, "Sunny", true, "Elon Musk", true, "Biryani", 10];
var string_arrays = mix_arrays.filter(function (item) { return typeof item === "string"; });
var number_arrays = mix_arrays.filter(function (item) { return typeof item === "number"; });
var bolean_arrays = mix_arrays.filter(function (item) { return typeof item === "boolean"; });
console.log(string_arrays);
console.log(number_arrays);
console.log(bolean_arrays);
