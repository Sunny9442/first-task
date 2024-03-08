var favourites_bikes = ["Yamaha", "Honda", "Kawasaki"];
for (var i = 0; i < Object.keys(favourites_bikes).length; i++) {
    console.log("This all my favourites bike " + Object.keys(favourites_bikes)[i], " is " + favourites_bikes[Object.keys(favourites_bikes)[i]]);
}
var transport = ["Car Lambhorgini", "Car Rolls Royce", "Car Ferrari"];
transport.forEach(function (transport) {
    console.log("i would like to own this ".concat(transport));
});
