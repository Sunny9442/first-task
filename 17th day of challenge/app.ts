// Question 49: Function with Rest Parameters: Write a function that takes a rest parameter representing multiple hobbies. It should log each hobby with a statement saying you enjoy that hobby.
function loghobbies (...hobbies) {
    hobbies .forEach(hobby => {
        console.log(`my hobby is ${hobby}`)
    });
}
loghobbies ("Bad Ball" , "Coding" , "Gaming")