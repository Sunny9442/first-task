var guest = ["Bill Gates", "Albert Einstien", "Sunny Shahzad"];
guest.forEach(function (guest) {
    console.log("Hello Guys ".concat(guest, " Would you like to dinner with me"));
});
var unabletoattends = "Sunny Shahzad";
console.log("UnfortunateLY ".concat(unabletoattends, " CANT'T make it to dinner"));
var replace = "Leonardo da Vinc";
guest[2] = replace;
guest.forEach(function (guest) {
    console.log("Hello Guys ".concat(guest, " would you like to dinner with me"));
});
