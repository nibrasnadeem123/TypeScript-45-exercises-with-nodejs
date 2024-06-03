function describe_city(city:string = "Karachi",country:string = "Pakistan"){
   console.log(`${city} is in ${country}`)
}
describe_city()

// call the function by default for another city
describe_city("Lahore")

// call the function by default for another city
describe_city("Quetta")

// call the function by default for another country and city
describe_city("Dehli","India")