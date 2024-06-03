// making function
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    // ... is used for unlimited elements used
    console.log("making the sandwich with following items:\n");
    items.forEach(function (single_items) { return console.log(single_items); });
    console.log("\n now enjoy your sandwich");
}
make_sandwich("chicken", "cheese", "butter");
make_sandwich("egg", "mayo");
make_sandwich("butter", "lettuce", "chicken", "mayo", "cheese");
