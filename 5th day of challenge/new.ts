let guest: string[] = ["Albert Einstein", "Bill Gates", "Sunny shahzad"]
guest.forEach(guest => {
    console.log(`Hello Guys ${guest} would you like to join us for Dinner`)
});
//unfortunately Sunny can't join to dinner
let unabletojoin: string = "Sunny Shahzad"
console.log(`unfortunately ${unabletojoin} can't join to dinner`)
let newguest: string = "Marie Curie"
guest[2]= newguest
guest.forEach(guest => {
    console.log(`Hello Dear ${guest} would you like to join us for Dinner`)
});