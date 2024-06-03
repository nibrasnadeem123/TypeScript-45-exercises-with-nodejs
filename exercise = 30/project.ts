//                  FIRST METHOD
let user_name=["admin","nibras","fatima","laiba","javeria"]

 if(user_name.includes("admin")){
     console.log(`Hello admin,would you like to see the status report`)
 }
 if(user_name.includes("nibras")){
     console.log(`hello nibras,thank you for logging in again`)
 }
 if(user_name.includes("fatima")){
    console.log(`hello fatima,thank you for logging in again`)
 }
 if(user_name.includes("laiba")){
     console.log(`hello laiba,thank you for logging in again`)
 }
 if (user_name.includes("javeria")){
     console.log(`hello javeria,thank you for logging in again`)
 }


//                     ANOTHER METHOD
let user_name2=["admin","nibras","fatima","laiba","javeria"]

// use FOREACH loop 
console.log(user_name2.forEach(one_user=>{
    if(one_user=="admin"){
        console.log(`hello ${one_user},would you like to see the status report`)
    }else{
        console.log(`helle ${one_user}thank you for logging in again`)
    }
}))
