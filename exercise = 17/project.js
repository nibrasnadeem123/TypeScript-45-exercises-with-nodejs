// create  a guest list array
var guestlist = ["anoosha", "shifa", "laiba", "javeria", "fatima", "ayesha"];
// making variable for those guest who dont come
var dontcome = guestlist[0];
// print the name of guest who dont come
console.log(dontcome, "nahi aa rahi");
// add or remove guest name from guest list
guestlist.splice(0, 1, "nimra");
// message print for bigger table
console.log("good news! we found a bigger table for dinner.");
// add a new guest at starting index of guestlist
guestlist.unshift("yashal");
// add a new guest at ending of guestlist list 
guestlist.push("barira");
// get a middle index for our guest list
var middleindex = Math.floor(guestlist.length / 2);
// add a new guest at middle index of our guest list
guestlist.splice(middleindex, 0, "nibras");
// print message to updated list
console.log("updated list of our guest", guestlist);
// sending a invitation to our guest one by one with their names 
guestlist.forEach(function (guest) { return console.log("assalam o alaikum ".concat(guest, ",would you like to dinner with me?")); });
// sending messgae to uninvite for dinner
console.log("unfortunately, the new dinner table wont arrive on time,so i only invite two guest to dinner with me.");
while (guestlist.length > 2) {
    var removeguest = guestlist.pop();
    console.log("sorry ".concat(removeguest, " i cna't invite you to dinner with me"));
}
// sending message to the last two guest
console.log("invitation to the last two guest");
// sending message to the last two guest
guestlist.forEach(function (oneguest) { return console.log("luckly, ".concat(oneguest, " you will still invited to dinner with me.")); });
// removing last two guest from the guest list
guestlist.pop();
guestlist.pop();
// print the empty array
console.log("empty list", guestlist);
