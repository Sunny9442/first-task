// Question 45: Car: Create detailed car objects with flexible Propterties
function car_details (manufacture : string , model : string , ...option :[string , any][]): object{
    let car = {manufacture , model }
    option .forEach(([key , value]) => car [key] = value )
    return car
}
console.log(car_details ("Toyota ", "Corolla" , ["Color" , "Red"] , ["Model ", 2002]))
console.log(car_details ("ford " , "Feist" , ["Color" , " Blue"] , ["Sunroof" , true]) )