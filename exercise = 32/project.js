// create variable for current user
var current_users = ["ayesha", "laiba", "yashal", "nabeera", "moheera", "areeba"];
// create variable for new user
var new_users = ["nibras", "ayesha", "fatima", "yashal", "javeria", "moheera"];
new_users.forEach(function (new_users1) {
    var our_condition = current_users.some(function (current_users1) { return current_users1.toLowerCase() === new_users1.toLowerCase(); });
    if (our_condition) {
        console.log("sorry! ".concat(new_users1, " is already taken"));
    }
    else {
        console.log("this username ".concat(new_users1, " is available"));
    }
});
