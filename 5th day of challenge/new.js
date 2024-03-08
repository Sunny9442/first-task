var guest = ["Albert Einstein", "Bill Gates", "Sunny shahzad"];
guest.forEach(function (guest) {
    console.log("Hello Guys ".concat(guest, " would you like to join us for Dinner"));
});
//unfortunately Sunny can't join to dinner
var unabletojoin = "Sunny Shahzad";
console.log("unfortunately ".concat(unabletojoin, " can't join to dinner"));
var newguest = "Marie Curie";
guest[2] = newguest;
guest.forEach(function (guest) {
    console.log("Hello Dear ".concat(guest, " would you like to join us for Dinner"));
});
