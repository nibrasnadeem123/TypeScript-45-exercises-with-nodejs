 function show_magician(magicians:string[]){
    magicians.forEach(name => console.log(name))
 }
 function make_great(magicians:string[]){
    return magicians.map(name =>`the great ${name}`)
      // .map is used for modifiying an element
   }
 let magicians_name = ["herry houdini","derren brown","dynamo","david copperfield","james randi","doug henning","penn jillette"]

 let copy_magicians_name = magicians_name.slice()

 let copy_great_magicians = make_great(copy_magicians_name)

show_magician(copy_magicians_name)
show_magician(copy_great_magicians)