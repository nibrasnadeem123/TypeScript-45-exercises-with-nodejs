// making function
function make_sandwich(...items:string[]){
    // ... is used for unlimited elements used
    console.log("making the sandwich with following items:\n");
    items.forEach(single_items =>console.log(single_items));
    console.log("\n now enjoy your sandwich")
}
make_sandwich("chicken","cheese","butter")

make_sandwich("egg","mayo")

make_sandwich("butter","lettuce","chicken","mayo","cheese")