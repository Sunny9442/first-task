// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.
var magicians = ["David", "Alice", "Sunny"];
function make_great(magicians) {
    var greatmagicians = [];
    magicians.forEach(function (magicians) {
        console.log("".concat(magicians, " The Great"));
    });
    return greatmagicians;
}
function show_magicians(magicians) {
    var poor_magicians = [];
    magicians.forEach(function (magicians) {
        console.log(" ".concat(magicians, " The poor Magicians"));
    });
    return poor_magicians;
}
var greatmagicians = make_great(magicians.slice());
var poor_magicians = show_magicians(magicians.slice());
console.log("Great Magicians");
show_magicians(magicians);
console.log("Poor Magicians");
show_magicians(greatmagicians);
make_great(poor_magicians);
