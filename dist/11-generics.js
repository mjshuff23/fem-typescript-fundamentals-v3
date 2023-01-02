"use strict";
// Generics
// Generics are a way to make a function or class reusable by parameterizing
//  its type.  This is a very powerful feature of TypeScript and is used
//  extensively in the standard library.  Let's look at an earlier example
const phones2 = {};
/*
  Let’s take as a given that sometimes it is more convenient to organize collections as key-value dictionaries, and other times it is more convenient to use arrays or lists.

  It would be nice to have some kind of utility that would allow us to convert a “list of things into” a “dictionary of things”.

  So, let’s treat this array of objects as our starting point:
*/
const phoneList = [
    { customerId: "0001", areaCode: "321", num: "123-4566" },
    { customerId: "0002", areaCode: "174", num: "142-3626" },
    { customerId: "0003", areaCode: "192", num: "012-7190" },
    { customerId: "0005", areaCode: "402", num: "652-5782" },
    { customerId: "0004", areaCode: "301", num: "184-8501" },
];
// And what we want to get:
const phoneDict = {
    "0001": {
        customerId: "0001",
        areaCode: "321",
        num: "123-4566",
    },
    // ...
};
function listToDict(list, // Take the list as an argument
idGen // Callback to get ids
) {
    // Return a dictionary
    // Initialize an empty dictionary
    const dict = {};
    // Loop through the array
    list.forEach((element) => {
        const dictKey = idGen(element); // Get the key
        dict[dictKey] = element; // Add the element to the dictionary
    });
    return dict;
}
console.log(listToDict(phoneList, (phone) => phone.customerId));
// Now, let's attempt to generalize this to work for lists and dictionaries of
//  any type of object.  We can do this by using a generic type parameter, but
//  let's try using any first to see what happens:
function listToDict2(list, // Take the list as an argument
idGen // Callback to get ids
) {
    const dict = {};
    list.forEach((element) => {
        const dictKey = idGen(element);
        dict[dictKey] = element;
    });
    return dict;
}
const list2 = [{ name: "Mike" }, { name: "Mark" }];
const myDict = listToDict2(list2, (item) => item.name);
console.log(myDict);
// myDict.Mike.I.shouldnt.Be.Able.to.do.this // This is bad
// What we need here is some mechanism of defining a relationship between the 
//  type of the thing we’re passed, and the type of the thing we’ll return. 
//  This is what Generics are all about
// Defining a Generic Type Parameter
//  Type parameters can be thought of as "function arguments, for types".  They
//  allow us to define a function that can work with any type of data, and
//  return a value of the same type.  Let's look at an example:
function wrapInArray(arg) {
    return [arg];
}
const myNumArray = wrapInArray(10);
const myStrArray = wrapInArray("Hello, generics!");
const myBoolArray = wrapInArray(true);
function listToDict3(list, // Take list of type Type as an argument
idGen // Callback to get ids specific to Type
) {
    const dict = {};
    list.forEach((element) => {
        const dictKey = idGen(element);
        dict[dictKey] = element;
    });
    return dict;
}
const list3 = [
    new Date("10-01-2021"),
    new Date("03-14-2021"),
    new Date("06-03-2021"),
    new Date("09-30-2021"),
    new Date("02-17-2021"),
    new Date("05-21-2021"),
];
console.log(listToDict3(list3, (date) => date.toDateString()));
