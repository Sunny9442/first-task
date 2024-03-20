// Question 48: Combining Arrays with Spread Operator: Suppose you're comparing prices of two different sets of laptops. Use the spread operator to combine these arrays into a single array sorted in ascending order, then log the result.
let priceset1 = [1000,500,300] 
let prcieset2 = [2000,3000,4000]
let combinepriceset = [...priceset1 , ...prcieset2].sort ((a , b) => a - b)
console.log(combinepriceset)