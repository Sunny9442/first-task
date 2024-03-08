//Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
var guestss = ["Albert Einstein", "Marie Curie", "Sunny Shahzad"];
console.log("Unfortunately, I can only invite two people for dinner.");
while (guestss.length > 2) {
    var removeguest = guestss.pop();
    console.log("".concat(removeguest, " Sorry i can't Invite you to a dinner table"));
}
guestss.forEach(function (guestss) {
    console.log("Dear ".concat(guestss, " you're still invited to dinner "));
});
guestss.splice(0, guestss.length);
console.log(guestss);
