//Question 22: Intentional Error: Try to produce an array index error in one of your programs. Correct the error before finishing.
var carnames = ["Lamborghini", "Royce Royals", "Audi"];
console.log(" Intentional error: Arrays are zero-indexed, so index 3 is out of ", carnames[3]);
console.log(carnames, [0]);
carnames[2] = "Audi"; //Correcting the error by accessing a valid index.
