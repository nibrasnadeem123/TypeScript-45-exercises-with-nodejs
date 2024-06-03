function make_shirt(size, print_messege) {
    if (size === void 0) { size = "large"; }
    if (print_messege === void 0) { print_messege = "I LOVE TYPESCRIPT!"; }
    console.log("you selected ".concat(size, " size shirt for making with ").concat(print_messege, " print on shirt"));
}
make_shirt();
// call the function for medium size by default
make_shirt("medium", "HELLO WORLD!");
// call function for small size by default
make_shirt("small", "HELLO YOUTH!");
