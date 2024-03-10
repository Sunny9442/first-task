//Question 30: Hello Admin: Greet users differently, especially 'admin'.
let Hello_admin: string []= ["Admin", "Admin1", "Admin2", "Admin3", "Admin4", "Admin5"]
Hello_admin.forEach(Hello_admin => {
    if (Hello_admin == "Admin"){
        console.log("Hello admin, would you like to see a status report?")
    }
    else {
        console.log(`Hello ${Hello_admin} thank you for logging in again`)
    }
});