//Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
var guests = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci"];
console.log("Great news! I found a bigger dinner table!");
guests.unshift("Sunny Shahzad");
guests.splice(guests.length / 2, 0, "Charles");
guests.push("Muhammad Shahzad");
guests.forEach(function (guests) {
    console.log("Hello Dear ".concat(guests, " Would you like to join me for Dinner"));
});
