var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
var priceset1 = [1000, 500, 300];
var prcieset2 = [2000, 3000, 4000];
var combinepriceset = __spreadArray(__spreadArray([], priceset1, true), prcieset2, true).sort(function (a, b) { return a - b; });
console.log(combinepriceset);
