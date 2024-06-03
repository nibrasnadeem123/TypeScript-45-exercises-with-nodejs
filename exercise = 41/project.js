var magicians = ["herry houdini", "derren brown", "dynamo", "david copperfield", "james randi", "doug henning", "penn jillette"];
function magicians_name() {
    var magician = magicians.forEach(function (magician) { return console.log("".concat(magician, " is a great magician")); });
}
magicians_name();
