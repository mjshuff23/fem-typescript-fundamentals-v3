"use strict";
// Types Guards and Narrowing
//  We've used the built-in Type Guards `typeof` and `instanceof`, but there's
//  a lot more to it than that, including user-defined type guards
// Built-In Type Guards Example
let value;
// Instanceof check
if (value instanceof Date) {
    value; // let value: Date
    // Specific value check
}
else if (value === null) {
    value; // let value: null
    // Truthy/Falsy check
}
else if (!value) {
    value; // let value: undefined
    // Typeof check
}
else if (typeof value === 'string') {
    value; // let value: 'pineapple'
    // Built-in Function check
}
else if (Array.isArray(value)) {
    value; // let value: [number]
    // Property Presence check
}
else if ("dateRange" in value) {
    value; // let value: { dateRange: [Date, Date] }
    // Exhaustive result should be never
}
else {
    value; // let value: never
}
let maybeCar;
// the guard
if (maybeCar &&
    typeof maybeCar === "object" &&
    "make" in maybeCar &&
    typeof maybeCar["make"] === "string" &&
    "model" in maybeCar &&
    typeof maybeCar["model"] === "string" &&
    "year" in maybeCar &&
    typeof maybeCar["year"] === "number") {
    maybeCar;
}
// Let's try putting it in a function
// function isCarLike(value: any) {
//   return (
//     value &&
//     typeof value === "object" &&
//     "make" in value &&
//     typeof value["make"] === "string" &&
//     "model" in value &&
//     typeof value["model"] === "string" &&
//     "year" in value &&
//     typeof value["year"] === "number"
//   )
// }
// if (isCarLike(maybeCar)) {
//   maybeCar // let maybeCar: unknown
//   // As things stand right now, TypeScript seems to have no idea that the 
//   //  return value of isCarLike has anything to do with the type of valueToTest
// }
// value is Foo
//  We can use the `is` keyword to tell TypeScript that the value is of a
//   specific type.  It's perfect for our CarLike example above because it's
//   meant to work in cooperation with a control flow statement of some sort,
//   to indicate that different branches of "flow" will be taken based on an
//   evaluation of value's type.  Pay attention to isCarLike's return type:
function isCarLike(value) {
    return (value &&
        typeof value === "object" &&
        "make" in value &&
        typeof value["make"] === "string" &&
        "model" in value &&
        typeof value["model"] === "string" &&
        "year" in value &&
        typeof value["year"] === "number");
}
if (isCarLike(maybeCar)) {
    maybeCar; // let maybeCar: CarLike!!
}
// asserts value is Foo
//  There's another approach that eliminates the need for a control flow.
//  Pay attention to assertsIsCarLike's return type:
function assertsIsCarLike(value) {
    // "If it's not CarLike, throw an error"
    if (!(value &&
        typeof value === "object" &&
        "make" in value &&
        typeof value["make"] === "string" &&
        "model" in value &&
        typeof value["model"] === "string" &&
        "year" in value &&
        typeof value["year"] === "number")) {
        throw new Error("Not CarLike");
    }
}
maybeCar; // let maybeCar: unknown
// assertsIsCarLike(maybeCar);
maybeCar; // let maybeCar: CarLike!!
// We are informing TypeScript that if assertsIsCarLike throws an error, it 
//  should be taken as an indication that the valueToTest is NOT 
//  type-equivalent to CarLike.
// Writing High-Quality Guards
// Bad Example:
/**
 * function isNull(val: any): val is null {
    return !val
   }
  
   const empty = ""
   const zero = 0
   if (isNull(zero)) {
    console.log(zero) // is it really impossible to get here?
      const zero: never
   }
   if (isNull(empty)) {
    console.log(empty) // is it really impossible to get here?
      const empty: never
   }
 */
function isNull(val) {
    return !val;
}
const empty = "";
const zero = 0;
if (isNull(zero)) {
    console.log(zero); // is it really impossible to get here?
}
if (isNull(empty)) {
    console.log(empty); // is it really impossible to get here?
}
