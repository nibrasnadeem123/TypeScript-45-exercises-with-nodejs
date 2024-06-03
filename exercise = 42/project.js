var magicians = ["herry houdini", "derren brown", "dynamo", "david copperfield", "james randi", "doug henning", "penn jillette"];
function magicians_name() {
    magicians.forEach(function (magician) { return console.log(magician); });
}
magicians_name();
function great_magician() {
    magicians.forEach(function (magicians) { return console.log("The great ".concat(magicians)); });
}
great_magician();
