//Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
let guestss: string []=["Albert Einstein", "Marie Curie", "Sunny Shahzad"]
console.log("Unfortunately, I can only invite two people for dinner.");

while (guestss.length > 2){
    let removeguest = guestss.pop();
    console.log(`${removeguest} Sorry i can't Invite you to a dinner table`)
}
guestss .forEach(guestss => {
    console.log(`Dear ${guestss} you're still invited to dinner `)
});
guestss.splice(0, guestss.length);
console.log(guestss); 