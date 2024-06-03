function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
    // .map is used for modifiying an element
}
var magicians_name = ["herry houdini", "derren brown", "dynamo", "david copperfield", "james randi", "doug henning", "penn jillette"];
var copy_magicians_name = magicians_name.slice();
var copy_great_magicians = make_great(copy_magicians_name);
show_magician(copy_magicians_name);
show_magician(copy_great_magicians);
