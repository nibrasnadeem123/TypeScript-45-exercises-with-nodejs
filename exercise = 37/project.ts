function make_shirt(size:string = "large",print_messege:string = "I LOVE TYPESCRIPT!"){
    console.log(`you selected ${size} size shirt for making with ${print_messege} print on shirt`)
}
make_shirt()

// call the function for medium size by default
make_shirt("medium","HELLO WORLD!")

// call function for small size by default
make_shirt("small","HELLO YOUTH!")