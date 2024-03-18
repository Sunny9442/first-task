// Question 42: Great Magicians: Add "the Great" to magician names.
let magicia : string [] = ["Alice", "David", "Chris"]
function make_magician (magicia : string[]){
    magicia . forEach (magicia => {
        console.log(magicia)
    });
}
make_magician (magicia)
function Great_magician (magicia : string []){
    for (let i = 0 ; i < magicia.length ; i++){
        magicia [i] = magicia [i] + " Great"
    }
}
Great_magician (magicia)
make_magician (magicia)
function excelent_magician (magicia : string []){
    for (let i = 0 ; i < magicia.length ; i++){
        magicia [i] = magicia [i] +" Excelent magicians"
    }
}
excelent_magician (magicia)
Great_magician (magicia)
make_magician (magicia)
