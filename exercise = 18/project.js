var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// create an array for the favourite place to visit
var favouriteplace = ["manora", "paf", "faisal mosque", "badshahi mosque", "murry"];
// print original array
console.log("original array:", favouriteplace);
// arrange the array into alphabetical order without modifiying the actual array(original array does not changed)
console.log("Alphbetical order:", __spreadArray([], favouriteplace, true).sort());
// [...] is used for coping an array and .sort is used for arrange the elements of an array in alphbetical order
// show that the array is still in an original order
console.log("array is still in original order:", favouriteplace);
// arrange the array in reverse order without modifying the original array(original array does not changed)
console.log("reverse order:", __spreadArray([], favouriteplace, true).reverse());
// .reverse is used for arrange the elemente of an array in reverse order
// show the array is still in original order
console.log("array is still in original order:", favouriteplace);
// now, we change the original array in reverse order 
console.log("reverse order:", favouriteplace.reverse());
// print the array to show the reverse order of the original array(original array changed)
console.log("original array changed:", favouriteplace);
// then we change the reverse array back into its original order
console.log("reverse into original array:", favouriteplace.reverse());
// print the array to show the reverse array into original order(original array changed)
console.log("back to original array:", favouriteplace);
// change the array in alphabetical order 
console.log("alphabetical order:", favouriteplace.sort());
// print the array to show the alphabetical order of array(original array changed)
console.log("original array changed:", favouriteplace);
// now change the alphabetical order into reverse order 
console.log("reverse alphabetical order:", favouriteplace.reverse());
// print the array to show the reverse alphabetical array (original array changed)
console.log("back from alphabetical order:", favouriteplace);
