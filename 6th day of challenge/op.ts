//Question 18: Seeing the World: Think of at least five places you’d like to visit.
let favouriteplace : string []= ["Pakistan", "palestine", "Canada", "Dubai", "Saudi Arabia"]
console.log("My favourite place is ", favouriteplace)
console.log("Original Order ", favouriteplace)
console.log("alphabetic Order ", [...favouriteplace] .sort())
console.log("reverse alphatic orders ", [...favouriteplace] .sort() .reverse())
favouriteplace.reverse()
console.log("Original Orders ", favouriteplace)
favouriteplace.reverse()
console.log("Reverse Orders ", favouriteplace)
favouriteplace.sort()
console.log("alphabetic Order ", favouriteplace)
favouriteplace.reverse()
console.log("Reverse Alphabetic Orders ", favouriteplace)