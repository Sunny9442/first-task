// Question 60: Self-Running User Profile: Create a quick, self-setup profile for a user that can tell you the user's name and age.
var user_profile = (function () {
    var username = "Sunny shahzad";
    var age = 22;
    return {
        describe: function () {
            console.log("user name : ".concat(username, " age : ").concat(age));
        }
    };
})();
user_profile.describe();
