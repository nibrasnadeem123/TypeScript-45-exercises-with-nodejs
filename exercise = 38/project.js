function describe_city(city, country) {
    if (city === void 0) { city = "Karachi"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city();
// call the function by default for another city
describe_city("Lahore");
// call the function by default for another city
describe_city("Quetta");
// call the function by default for another country and city
describe_city("Dehli", "India");
