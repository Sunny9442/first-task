// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
let user_profile = (function (){
    let username = "Sunny shahzad";
    let age = 22;
    return {
        describe : function (){
            console.log(`user name : ${username} age : ${age}`)
        }
    }
})();
user_profile .describe();