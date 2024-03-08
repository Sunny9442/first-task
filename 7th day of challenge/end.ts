//Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let introduce:{Title :string; Born :string; age :Number; revolutionyearsofmicrosoft: string; Writer: string}={
    Title : "Bill Gates",
    Born: "October 28, 1955",
    age: 68,
    revolutionyearsofmicrosoft:"1970s to 1980s",
    Writer: "giant microsoft"
}
console.log(`My name is ${introduce.Title} & was born on ${introduce.Born}, my age is ${introduce.age}, my revolution is ${introduce.revolutionyearsofmicrosoft} yeah i am also big write & i wrote is ${introduce.Writer}`);