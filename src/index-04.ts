// Interfaces and Type Aliases
//  Interfaces and Type Aliases are both ways to define a custom type.

// Type Aliases
//  Type aliases are a way to give a custom name to a type or shape of an
//   object.  They allow us to declare the particulars of a type in a single
//   place.  We can also import and export aliases and interfaces

/**
 * @filename: types.ts
  export type UserContactInfo = {
    name: string
    email: string
  }

 * @filename: utilities.ts
  import { UserContactInfo } from "./types"          
    (alias) type UserContactInfo = {
      name: string;
      email: string;
    }
  function printContactInfo(info: UserContactInfo) {
    console.log(info)              
      (parameter) info: UserContactInfo
    console.log(info.email)
      (property) email: string
  }
 */

// Let's use type aliases to clean up one of our previous examples
type UserInfoOutcomeSuccess = ['success', { name: string; email: string }];
type UserInfoOutcomeError = ['failure', Error];
type UserInfoOutcome = UserInfoOutcomeSuccess | UserInfoOutcomeError;

function maybeGetUserInfoTwo(): UserInfoOutcome {
  if (Math.random() > 0.5) {
    return ['success', { name: 'John', email: 'john@john.com' }];
  } else {
    return ['failure', new Error('Something went wrong')];
  }
}

// Inheritance in Type Aliases
//  You can create type aliases that combine existing types with new behavior
//   by using Intersection (&) types.
type SpecialDate = Date & { getReason(): string };

const newYearsEve: SpecialDate = Object.assign(new Date(), { 
  getReason() { return 'New Year'; } 
});

console.log(newYearsEve.getDay());
console.log(newYearsEve.getReason());

// Interfaces
//  Interfaces are a way to define an object type.  An object type can be thought of as "an instance of a class could look like this."
interface UserContactInformation {
  name: string;
  email: string;
  phone: string;
}

function printContactInfo(info: UserContactInformation) {
  console.log(info);
  console.log(info.email);
}

printContactInfo({ name: 'John', email: 'john@john.com', phone: '555-555-5555' });

// Inheritance in Interfaces
//  You can create interfaces that combine existing interfaces with new behavior
//  by using the extends keyword.
interface Animal {
  isAlive(): boolean;
}

interface Mammal extends Animal {
  getFurOrHairColor(): string;
}

interface Dog extends Mammal {
  getBreed(): string;
}

function careForDog(dog: Dog) {
  console.log(dog.isAlive() ? 'Dog is alive' : 'Dog is dead');
  console.log('Fur Color:', dog.getFurOrHairColor());
  console.log('Breed:', dog.getBreed());
}

const myDog: Dog = {
  isAlive: () => true,
  getFurOrHairColor: () => 'brown',
  getBreed: () => 'Labrador Retriever',
}

careForDog(myDog);

// Implements vs Extends
//  Interfaces can be used to define the shape of an object, but they can also
//  be used to define the shape of a class.  When defining the shape of a class,
//  we use the implements keyword instead of extends.
interface AnimalLike {
  eat: (food) => void;
}

// This class implements the AnimalLike interface, which means that it must
//  have an eat method.  If it does not, the compiler will throw an error.
class Doggo implements AnimalLike {
  bark = () => console.log('woof');
  eat = (food) => console.log('yum,', food);
}

const doggo = new Doggo();
doggo.eat('cheese');

// Recursive Types
//  Interfaces and type aliases can be recursive, meaning that they can refer
//  to themselves.  This is useful when you want to define a type that can
//  contain itself.

type NestedNumbers = number | NestedNumbers[];
type NestedStrings = string | NestedStrings[];
type ArraysOfNumbersAndStrings = (number | string)[] | ArraysOfNumbersAndStrings[];