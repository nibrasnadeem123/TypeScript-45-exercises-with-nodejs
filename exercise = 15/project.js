var guestlist = ["anoosha", "shifa", "laiba", "javeria", "fatima", "ayesha"];
var dontcome = guestlist[0];
console.log(dontcome, "nahi aa raha");
guestlist.splice(0, 0, "nimra");
guestlist.forEach(function (guest) { return console.log("assalam o alaikum ".concat(guest, ",would you like to dinner with me?")); });
