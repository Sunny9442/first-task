// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

let magicians : string []= ["David", "Alice", "Sunny"]
function make_great (magicians : string []): string[]{
    let greatmagicians = [];
    magicians .forEach(magicians => {
        console.log(`${magicians} The Great`)
    });
    return greatmagicians
}
function show_magicians (magicians: string[]): string []{
    let poor_magicians = [];
    magicians .forEach(magicians=> {
        console.log(` ${magicians} The poor Magicians`)
    });
    return poor_magicians
}
let greatmagicians = make_great (magicians . slice())
let poor_magicians = show_magicians (magicians .slice ())
console.log("Great Magicians")
show_magicians (magicians)
console.log("Poor Magicians")
show_magicians (greatmagicians)
make_great (poor_magicians)
