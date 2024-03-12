//Question 32: Checking Usernames: Ensure uniqueness in usernames.
let current_user: string []=["User 1", "User 2", "User 3", "User 4", "User 5"]
let new_user : string []=["Admin 1", "Admin 2", "Admin 3", "Admin 4", "Admin 5"]
new_user .forEach(new_user => {
    if (current_user. some (current_user => current_user.toLowerCase()=== new_user.toLowerCase())){
        console.log(`${new_user}will fint to some one new user`)
    }
    else{
        console.log(`${new_user} is availble`)
    }
});