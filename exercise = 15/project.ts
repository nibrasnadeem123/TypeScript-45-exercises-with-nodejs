let guestlist = ["anoosha","shifa","laiba","javeria","fatima","ayesha"]
let dontcome = guestlist[0]
console.log(dontcome,"nahi aa raha")
guestlist.splice(0,0,"nimra")
 guestlist.forEach(guest =>console.log(`assalam o alaikum ${guest},would you like to dinner with me?`))