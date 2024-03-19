// Question 45: Car: Create detailed car objects with flexible Propterties
function car_details(manufacture, model) {
    var option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        option[_i - 2] = arguments[_i];
    }
    var car = { manufacture: manufacture, model: model };
    option.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(car_details("Toyota ", "Corolla", ["Color", "Red"], ["Model ", 2002]));
console.log(car_details("ford ", "Feist", ["Color", " Blue"], ["Sunroof", true]));
