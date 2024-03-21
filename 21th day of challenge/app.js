// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var Vehcles;
(function (Vehcles) {
    Vehcles[Vehcles["Cars"] = 0] = "Cars";
    Vehcles[Vehcles["Motorcycle"] = 1] = "Motorcycle";
    Vehcles[Vehcles["Trucks"] = 2] = "Trucks";
    Vehcles[Vehcles["Suzuki"] = 3] = "Suzuki";
})(Vehcles || (Vehcles = {}));
console.log(Vehcles.Cars);
