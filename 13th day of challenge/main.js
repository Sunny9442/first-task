// Question 38: Cities: Describing cities with a function.
function Describing_cities(birthdate, city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("i was born in ".concat(birthdate, ", & i lived in ").concat(city, " ").concat(country));
}
Describing_cities("26-feb-2002", "Karachi");
Describing_cities("26-feb-2002", "Lahore");
Describing_cities("26-feb-2002", "islamabad");
