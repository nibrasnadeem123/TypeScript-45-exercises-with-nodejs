// create variable for current user
let current_users=["ayesha","laiba","yashal","nabeera","moheera","areeba"]

// create variable for new user
let new_users=["nibras","ayesha","fatima","yashal","javeria","moheera"]

new_users.forEach(new_users1 => {
    let our_condition=current_users.some(current_users1=>current_users1.toLowerCase()===new_users1.toLowerCase())
    if(our_condition){
        console.log(`sorry! ${new_users1} is already taken`)
    }
    else{
        console.log(`this username ${new_users1} is available`)
    }
});