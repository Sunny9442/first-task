// Question 64: Combine Strings and Numbers: Write a function that merges a piece of text with a number. For example, if provided with "Age: " and 30, it should give back "Age: 30".
function Combine_string_number (text : string , number : number) : string {
    return text + number
}
console.log(Combine_string_number ("Age : " , 30))
//example : 02
 function Combine (texts : string , numbers : number) : string{
    return texts + numbers
 }
 console.log(Combine ("Sunny Age : " , 22))