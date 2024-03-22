// Question 66: Logical AND Verification: Create a function that checks two boolean (true or false) values. It should only say true if both are true, using the && operator. For instance, checkBothTrue(true, false) should be false.
function both_true (Sunny : boolean , Hamza : boolean) : boolean{
    return Sunny && Hamza;
}
console.log(both_true (true , false))