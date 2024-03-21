// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.
type shape_shifter ={
    kind : "rectanguler" | "circle"
    radius ? : number
    height ? : number
    width ? : number
}
let rectanguler : shape_shifter ={
    kind : "rectanguler",
    radius : 5,
    width : 10,
    height : 20
}
let circle : shape_shifter ={
    kind : "circle",
    radius : 10,
    height : 30,
    width : 25
}
console.log(rectanguler)
console.log(circle)