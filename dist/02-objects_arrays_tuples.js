"use strict";
// Objects, Arrays, and Tuples
let car;
/**
 * Print information about a car to the console
 * @param car - the car to print
 */
function printCar(car) {
    console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, Color: ${car.color}, ${car.chargeVoltage ? `, Charge Voltage: ${car.chargeVoltage}` : ''}`);
}
printCar({
    make: 'Toyota',
    model: 'Camry',
    year: 2019,
    color: 'Red',
});
// Index Signatures
// You can use index signatures to define the types of the keys and values in an
//  object.  Let's consider the following collection of phone numbers
const phones = {
    home: { country: "+1", area: "555", number: "555-1212" },
    work: { country: "+1", area: "555", number: "555-1213" },
    fax: { country: "+1", area: "555", number: "555-1214" },
    mobile: { country: "+1", area: "555", number: "555-1215" },
};
// Clearly it seems that we can store phone numbers under a “key” — in this 
//  case home, office, fax, and possibly other words of our choosing — and each 
//  phone number is comprised of three strings.
// We could describe this value using what’s called an index signature:
const phonesSignature = {}; // This is an empty object with an index signature
console.log(phonesSignature.fax); // Be careful, this will return `undefined`!
// Array Types
// There are two ways to define array types. The first way is to use square
//  brackets after the type of the array elements: `string[]` is an array of
//  strings. The second way is to use the `Array` generic type: `Array<string>`
//  is also an array of strings.
const fileExtensions = ["js", "ts"]; // implicitly typed as `string[]`
const fileExtensions2 = ["js", "ts"]; // explicitly way 1
const fileExtensions3 = ["js", "ts"]; // explicitly way 2
// Tuples
// Tuples are a special kind of array that allow you to specify the type of each
//  index in the array.  Tuples are useful when you know the number of elements
//  in an array and the type of each element.
//          [Year, Make    , Model  ]
let myCar = [2002, "Toyota", "Camry"]; // implicitly typed as `(number | string)[]`, disregarding the index types
const [year, make, model] = myCar; // destructuring assignment, notice how the types are inferred incorrectly
// Explicitly typed tuple
let mySecondCar = [2021, "Mitsubishi", "Outlander SE"];
// mySecondCar = ["Honda", 1999, "Taco"] // Error: Type 'string' is not assignable to type 'number'
// Tuple Limitations: You can't set the tuples length, because push and pop
//  methods are available on tuples.
