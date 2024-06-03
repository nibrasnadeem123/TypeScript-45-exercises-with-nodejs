var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var onenumber = array_1[_i];
    var ordinal_number = void 0;
    if (onenumber === 1) {
        ordinal_number = "st";
    }
    else if (onenumber === 2) {
        ordinal_number = "nd";
    }
    else if (onenumber === 3) {
        ordinal_number = "rd";
    }
    else {
        ordinal_number = "th";
    }
    console.log("".concat(onenumber).concat(ordinal_number));
}
