// Question 37: Large Shirts: Default values in make_shirt().
function makes_shirt (size : string = "Double Excel", message : string = "I love typescript"){
    console.log(`Taking the shirt ${size} t-shirt with the message ${message} PRINTED ON IT`)
}
makes_shirt(); //default messag
makes_shirt ("Double excel");
makes_shirt ("Small" , "Coding is my life")
