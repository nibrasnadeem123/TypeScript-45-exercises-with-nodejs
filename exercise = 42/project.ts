let magicians = ["herry houdini","derren brown","dynamo","david copperfield","james randi","doug henning","penn jillette"]
 function magicians_name(){
    magicians.forEach(magician => console.log(magician));
 }
 magicians_name()

 function great_magician(){
    magicians.forEach(magicians => console.log(`The great ${magicians}`))
 }
 great_magician()