"use strict";
// Top and Bottom Types
// Types describe sets of allowed values
let x; // x = {true, false};
let y; // y = {0, 1, 2, 3, ...}
let a; // a = {5, 6, 7}
let b; // b = {null}
let c; // c = {'pineapple' | undefined}
// Top Types
//  A top type (⊤) is a type that describes any possible values allowed by the
//   system.  {x | x ∈ X} is a top type if X is the set of all possible values
//  TypeScript has two top types: any and unknown
// any
//  You can think of values with `any` type as being "untyped" or basic JS.
//  Thus, there is no security or type checking when using `any` types.  This
//  is not always a problem, but it should be kept in mind
let flexible = 5;
flexible = "test";
flexible = true;
flexible = () => console.log('yee');
// unknown
//  The `unknown` type is similar to `any`, but it is more restrictive.  You
//  can not use `unknown` types in any way without first checking their type
//  with an `if` statement or type guard
let myUnknown = 5;
// myUnknown.can.I.do.this? // Object is of type 'unknown'.
// This code runs for { myUnknown | anything }
if (typeof myUnknown === 'string') {
    myUnknown; // string
}
else if (typeof myUnknown === 'number') {
    myUnknown; // number
}
else {
    myUnknown; // unknown
}
// Practical Use for Top Types
//  unknown is a great type for values received at runtime.  By obligating
//  ourselves to check the type of the value before using it, we can be sure
//  that we are using the value in a way that is safe and type-safe
//  any can be used when you need to do things in a hurry until you have time 
//   to type it properly
// Bottom Type: never
//  A bottom type (⊥) is a type that describes no possible values allowed by
//  the system.  In theory, any value of the set { }
//  never is very useful when creating exhaustive conditionals
// Exhaustive Conditionals
class Car4 {
    drive() {
        console.log('vroom');
    }
}
class Truck4 {
    tow() {
        console.log('tow');
    }
}
class Boat4 {
    sail() {
        console.log('sail');
    }
}
function obtainRandomVehicle() {
    const random = Math.random();
    if (random < 0.33) {
        return new Car4();
    }
    else if (random < 0.66) {
        return new Truck4();
    }
    else {
        return new Boat4();
    }
}
const myVehicle = obtainRandomVehicle();
// Exhaustive Conditional
// --NOTE--
// If we were to add a new type to the Vehicle type, we would get a compiler
//  error because the conditional is exhaustive and is not never when it reaches
//  the final else statement
if (myVehicle instanceof Car4) {
    myVehicle.drive();
}
else if (myVehicle instanceof Truck4) {
    myVehicle.tow();
}
else {
    // const neverValue: never = myVehicle; // Boat4 not assignable to type never
}
// You can handle this gracefully with an error subclass
class InvalidVehicleError extends Error {
    constructor(_vehicle, message) {
        super(message);
    }
}
if (myVehicle instanceof Car4) {
    myVehicle.drive();
}
else if (myVehicle instanceof Truck4) {
    myVehicle.tow();
}
else if (myVehicle instanceof Boat4) {
    myVehicle.sail();
}
else {
    throw new InvalidVehicleError(myVehicle, 'Invalid Vehicle');
}
