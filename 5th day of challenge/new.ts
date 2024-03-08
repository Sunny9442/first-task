//Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.
let guest : string []=["Bill Gates", "Albert Einstien", "Sunny Shahzad"]
guest.forEach(guest => {
    console.log(`Hello Guys ${guest} Would you like to dinner with me`)
});
let unabletoattends : string= "Sunny Shahzad"
console.log(`UnfortunateLY ${unabletoattends} CANT'T make it to dinner`)
let replace : string= "Leonardo da Vinc" 
guest [2]= replace
guest.forEach(guest => {
    console.log(`Hello Guys ${guest} would you like to dinner with me`)
});