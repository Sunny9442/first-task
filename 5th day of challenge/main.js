var guests = ["Bill Gates", "Albert Einstien", "Sunny Shahzad"];
guests.forEach(function (guests) {
    console.log("Hello Dear ".concat(guests, " Would you like to join me for Dinner"));
});
var unableToAttend = "Sunny shahzad";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "Leonardo da Vinci";
guests[guests.indexOf(unableToAttend)] = newGuest;
console.log(newGuest);
// New invitations
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
