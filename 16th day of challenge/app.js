// Question 46: Enhanced Laptop Object: Construct an object for a laptop including properties make, model, year, and a method describe() that logs a sentence about the laptop.
var laptop = {
    make: "HP i5 6th generation",
    model: "EliteBook G3 820",
    year: 2018,
    SSD: 256,
    RAM: "8gb DDR4",
    describe: function () {
        console.log(" This is my laptop ".concat(this.make, " ").concat(this.model, " ").concat(this.year, " ").concat(this.SSD, " ").concat(this.RAM));
    }
};
laptop.describe();
