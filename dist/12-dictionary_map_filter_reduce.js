"use strict";
// Dictionary map, filter, and reduce
///// SAMPLE DATA FOR YOUR EXPERIMENTATION PLEASURE (do not modify)
const fruits = {
    apple: { color: "red", mass: 100 },
    grape: { color: "red", mass: 5 },
    banana: { color: "yellow", mass: 183 },
    lemon: { color: "yellow", mass: 80 },
    pear: { color: "green", mass: 178 },
    orange: { color: "orange", mass: 262 },
    raspberry: { color: "red", mass: 4 },
    cherry: { color: "red", mass: 5 },
};
// Map
function mapDictionary(inputDictionary, mapFunction) {
    const outputDictionary = {};
    for (const key in inputDictionary) {
        const thisValue = inputDictionary[key];
        outputDictionary[key] = mapFunction(thisValue, key);
    }
    return outputDictionary;
}
// Filter
function filterDictionary(inputDictionary, filterFunction) {
    const outputDictionary = {};
    for (const key in inputDictionary) {
        const thisValue = inputDictionary[key];
        if (filterFunction(thisValue, key)) {
            outputDictionary[key] = thisValue;
        }
    }
    return outputDictionary;
}
// Reduce
function reduceDictionary(inputDictionary, reduceFunction, initialValue) {
    let value = initialValue;
    for (const key in inputDictionary) {
        const thisValue = inputDictionary[key];
        value = reduceFunction(value, thisValue, key);
    }
    return value;
}
;
const myDict2 = {
    "1": { name: "Mike" },
    "2": { name: "Mark" },
    "3": { name: "Mary" },
};
console.log(mapDictionary(myDict2, (item) => item.name + " is cool"));
console.log(filterDictionary(myDict2, (item) => item.name === "Mike"));
console.log(reduceDictionary(myDict2, (currentValue, item) => currentValue + " " + item.name, "Test"));
