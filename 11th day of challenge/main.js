//Question 32: Checking Usernames: Ensure uniqueness in usernames.
var current_user = ["User 1", "User 2", "User 3", "User 4", "User 5"];
var new_user = ["Admin 1", "Admin 2", "Admin 3", "Admin 4", "Admin 5"];
new_user.forEach(function (new_user) {
    if (current_user.some(function (current_user) { return current_user.toLowerCase() === new_user.toLowerCase(); })) {
        console.log("".concat(new_user, "will fint to some one new user"));
    }
    else {
        console.log("".concat(new_user, " is availble"));
    }
});
