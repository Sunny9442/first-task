//Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, print a message to them. The message should be the same for each person, but personalized with their name.
let mynames: string[] =["Sunny", "Hamza", "Hammad"]
for (let name of mynames){
    console.log(`Hello ${mynames} would you like to some learn typescript today?`)
    console.log("yes")
}