var user_name2 = [];
if (user_name2.length == 0) {
    console.log("my earray is empty, I need to find some users");
}
else {
    // use FOREACH loop 
    console.log(user_name2.forEach(function (one_user) {
        if (one_user == "admin") {
            console.log("hello ".concat(one_user, ",would you like to see the status report"));
        }
        else {
            console.log("helle ".concat(one_user, "thank you for logging in again"));
        }
    }));
}
