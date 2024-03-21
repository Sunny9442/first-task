// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.
let mix_arrays = [2 , "Sunny" , true , "Elon Musk" , true , "Biryani" , 10]
let string_arrays = mix_arrays .filter (item => typeof item === "string")
let number_arrays = mix_arrays .filter (item => typeof item === "number")
let bolean_arrays = mix_arrays .filter (item => typeof item === "boolean")
console.log(string_arrays)
console.log(number_arrays)
console.log(bolean_arrays)