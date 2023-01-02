// Generics Scopes & Constraints

// We're going to discuss how scoping works with type params, and how we can
//  describe type params that have more specific requirements than `any`.

// Generic Constraints
//  Allow us to describe the "minimum requirement" for a type param, such that
//  we can achieve a high degree of flexibility, while still being able to
//  safely assume some minimal structure and behavior.

// Motivating Use Case - Recall the example we used in our Generic's Chapter:
function listToDict4<Type>(
  list: Type[], // array as input
  idGen: (arg: Type) => string // obtain item id
): { [key: string]: Type } {
  // Create dictionary to fill
  const dict: { [key: string]: Type } = {};

  for(let item of list) {
    const id = idGen(item);
    dict[id] = item;
  }

  return dict;
}

// Let’s strip away some noise and just study the function signature:
function lToDict<Type>(
  list: Type[],
  idGen: (arg: Type) => string
): { [key: string]: Type } {
  return {}; 
}

// Here, we ask the caller to provide us with a means to generate an `id`, but
//  let's imagine that every type we wish to use this with has an `id: string`
//  property, and we should just use that as the key.
interface HasId {
  id: string;
}

interface Dictionary2<Type> {
  [key: string]: Type;
}

function listToDict5(list: HasId[]): Dictionary2<HasId> {
  const dict: Dictionary2<HasId> = {};

  list.forEach(item => {
    dict[item.id] = item;
  })

  return dict;
}

// Great, now let's implement this with generics
function listToDictGeneric<Type>(list: Type[]): Dictionary2<Type> {
  const dict: Dictionary2<Type> = {};

  list.forEach(item => {
    // dict[item.id] = item; // Error: Property 'id' does not exist on type 'Type'
  })

  return dict;
}

// The problem here is that `Type` can be ANYTHING, potentially without an `id`
//  We were able to get away with this in our initial solution (with the idGen
//  function) because `listToDict` didn't really do anything with the `Type`
//  other than store a reference to it in the dictionary.

// Describing the Constraint
// The way we define constraints on generics is by using the `extends` keyword
// The correct way of making our function generic is shown in the following:
// Note that our 'requirement' for our argument type(`HasId`) is now represented
//  in two places:
//  1. extends HasId as the constraint on Type
//  2. `list: Type[]` as the argument type to ensure we get an array
function listToDictGeneric2<Type extends HasId>(list: Type[]): Dictionary2<Type> {
  const dict: Dictionary2<Type> = {};

  list.forEach(item => {
    dict[item.id] = item;
  });

  return dict;
};

// Type Extends vs. Class Extends
// The `extends` keyword is used in object-oriented inheritance, and while
//  not strictly equivalent to how it is used in type params, it is similar.

// When a class extends from a base class, it's guaranteed to at least align
//  with the base class structure.  In the same way, Type extends HasId 
//  guarantees that "Type is at least a HasId".

// Scopes and TypeParams
// When working with function parameters, we know that "inner scopes" have the
//  ability to access "outer scopes", but not vice versa.  This is true for
//  type params as well.
// function receiveFruitBasket(bowl: string) {
//   console.log('Thanks for the fruit basket!');
//   // only bowl can be accessed here
//   return (bowl, (apple) => {
//     // bowl and apple can be accessed here
//   })
// }
function tupleCreator<Type>(first: Type) {
  // only first can be accessed here
  return function finish<Result>(last: Result): [Type, Result] {
    // both first and last can be accessed here
    return [first, last];
  }
}

const finishTuple = tupleCreator(3);
const t1 = finishTuple(null);
const t2 = finishTuple([4, 5, 6]);

// The same design principles that you use for deciding whether values belong as
//  class fields vs arguments passed to members should serve well here
// Remember, this is not exactly an independent decision to make, as the
//  types belong to the same scope as the values they represent.

// Best Practices
// 1. Use each type parameter at least twice.  Any less and you might be casting
//     with the as keyword.  Let's take a look at an example.
function returnAs<Type>(arg: any): Type {
  return arg; // an 'any that will seem like a Type
}
const firstly = returnAs<number>(window);
const secondly = window as any as number;

// 2. Define type params as simply as possible.  Consider these two:
function ex1<Type extends HasId[]>(list: Type) {
  list[0].id;
  return list.pop();
}

function ex2<Type extends HasId>(list: Type[]) {
  return list[0].id;
}