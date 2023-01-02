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
}

interface Dictionary<Type> {
  [key: string]: Type
}

// Map
function mapDictionary<Type, Result>(
  inputDictionary: Dictionary<Type>,
  mapFunction: (originalDictionary: Type, key: string) => Result
): Dictionary<Result> {
  const outputDictionary: Dictionary<Result> = {}

  for (const key in inputDictionary) {
    const thisValue = inputDictionary[key];
    outputDictionary[key] = mapFunction(thisValue, key);
  }

  return outputDictionary;
}

// Filter
function filterDictionary<Type>(
  inputDictionary: Dictionary<Type>,
  filterFunction: (value: Type, key: string) => boolean
): Dictionary<Type> {
  const outputDictionary: Dictionary<Type> = {}

  for (const key in inputDictionary) {
    const thisValue = inputDictionary[key];
    if (filterFunction(thisValue, key)) {
      outputDictionary[key] = thisValue;
    }
  }

  return outputDictionary;
}

// Reduce
function reduceDictionary<Type, Result>(
  inputDictionary: Dictionary<Type>,
  reduceFunction: (currentValue: Result, value: Type, key: string) => Result,
  initialValue: Result
): Result {
  let value = initialValue;
  for (const key in inputDictionary) {
    const thisValue = inputDictionary[key];
    value = reduceFunction(value, thisValue, key);
  }

  return value;
};

const myDict2 = {
  "1": { name: "Mike" },
  "2": { name: "Mark" },
  "3": { name: "Mary" },
}

console.log(mapDictionary(myDict2, (item) => item.name + " is cool"));
console.log(filterDictionary(myDict2, (item) => item.name === "Mike"));
console.log(reduceDictionary(myDict2, (currentValue, item) => currentValue + " " + item.name, "Test"));