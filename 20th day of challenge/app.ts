// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.
function calculates (...items : number []): number {
    let average = items.reduce ((items , sum )=> items + sum ,0)
    return average / items.length
} 
console.log(calculates(99,45,45,67,89,92))