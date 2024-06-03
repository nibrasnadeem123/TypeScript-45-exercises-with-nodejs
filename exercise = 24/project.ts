let fruit = "mango"
let uppercaseAPPLE ="MANGO"

// test for equality or ineuality
console.log("is fruit is equal to mango?")
console.log(fruit = `mango`)

console.log("is fruit is not equal to mango?")
console.log(fruit != `mango`)

// test using lower case
console.log("is mango is equal to MANGO after converting into lower case?")
console.log(uppercaseAPPLE.toLowerCase() == `mango`)

//                 NUMERICAL TEST 
// test using =>,=<,<>
let number1 = 10
let number2 = 20

// test for >=
console.log("is number2 is grester than or equal to number1?")
console.log(number2>=number1)         


console.log("is number2 is greater than 30?")
console.log(number2>30)

console.log("is number2 is less than 20?")
console.log(number2<20)

console.log("is number2 is less than 10 ?")
console.log(number2<10)

//  test for =
 console.log("is number1 is equal to number2?")
console.log(number1=number2)

console.log("is 10 is equal to 20?")
console.log(number1 = 20)

// test for less than or equal to
console.log("is number1 is equal to or less than number2?")
console.log(number1 <= number2)

console.log("is number1 is equal to or less than 5")
console.log(number1 <= 5)

//                      AND & OR OPERATOR

// using and operator
console.log("is number2 is greater than number1 and number1 is equal to 10?")
console.log(20>10 && 10 <15);

console.log("is 10 is greater than 5 and is less than 20")
console.log(10 > 5 && 10 < 20)

console.log("is 2 is greater than 5 and 5 is greater than 4")
console.log(2>5 && 5>4)

// using or operator
console.log("is number2 is less than number1 or number1 is equal to 10")
console.log(10 >20|| 10 == 10)

console.log("is 50 is greater than 40 or 40 is less than 20")
console.log(50 > 40 || 40 <20)

//                       WHETHER TEST
let fruits = ["mango","apple","banana"]
console.log("is orange include in fruits array?")
console.log(fruits.includes("orange"))

console.log("is apple include in fruits array? ")
console.log(fruits.includes("apple"))