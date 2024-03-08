var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Question 18: Seeing the World: Think of at least five places you’d like to visit.
var favouriteplace = ["Pakistan", "palestine", "Canada", "Dubai", "Saudi Arabia"];
console.log("My favourite place is ", favouriteplace);
console.log("Original Order ", favouriteplace);
console.log("alphabetic Order ", __spreadArray([], favouriteplace, true).sort());
console.log("reverse alphatic orders ", __spreadArray([], favouriteplace, true).sort().reverse());
favouriteplace.reverse();
console.log("Original Orders ", favouriteplace);
favouriteplace.reverse();
console.log("Reverse Orders ", favouriteplace);
favouriteplace.sort();
console.log("alphabetic Order ", favouriteplace);
favouriteplace.reverse();
console.log("Reverse Alphabetic Orders ", favouriteplace);
