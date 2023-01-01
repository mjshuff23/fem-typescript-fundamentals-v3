// Union and Intersection Types
// Union and intersection types can conceptually be thought of as logical
//  boolean operators (AND, OR, NOT) applied to types.  Imagine a Venn diagram
//  Left Circle is fruit, Right Circle is Sour.  The far left side of the left
//  circle are all fruit that are not sour.  The far right side of the right
//  circle are all sour things that are not fruit.  The overlap is all sour
//  fruit.
// Union (`|`) - OR for types.  In the above example, the union type would be
//  `Fruit | Sour`.  This means that the type is either a Fruit or Sour or both.
//  basically everything on the chart.
// Intersection (`&`) - AND for types.  In the above example, the intersection type
//  would be `Fruit & Sour`.  This means that the type is both a Fruit and Sour.
//  Intersection would be overlap of the two circles.

// Union Types
let outcome: 'success' | 'failure' = 'success';
// outcome = 'pending'; // Error: 'pending' is not assignable to 'success' | 'failure'
outcome = 'failure';

function flipCoin(): 'heads' | 'tails' {
  if (Math.random() > 0.5) return 'heads';
  return 'tails';
}

const outcome2 = flipCoin();
console.log('outcome2:', outcome2);

// Let's make it more interesting by using tuples, structured as follows:
//  [0] - Either "success" or "failure"
//  [1] - Something depending on the first element:
//    - "success": Object { name: string; email: string }
//    - "failure": an `Error` instance

function maybeGetUserInfo():
  | ['failure', Error]
  | ['success', { name: string; email: string }] {
  if (flipCoin() === 'heads') {
    return ['success', { name: 'Mike', email: 'mjshuff23@gmail.com' }];
  } else {
    return ['failure', new Error('Something went wrong')];
  }
}

const outcome3 = maybeGetUserInfo();

const [first, second] = outcome3;
// Notice how it knows first is a string and second is an object or an error.
//  VSCode will suggest the methods available to a string when typing `first.`
//  and the methods available to an object or an error when typing `second.`
// first.split('');
// console.log(second.name);

// Narrowing with Type Guards
// When dealing with Unions and Intersections, we will need to narrow the
//  type of a variable to a specific type.  This is called a Type Guarding.
// Type Guards are expressions, which when used with control flow statements,
//  allows us to narrow the type of a specific value down.

// Right now, second is either an object or an error.  We can narrow it down
//  to an object by using the `instanceof` operator.
if (second instanceof Error) {
  second; // hover over `second` and you'll see it's an `Error` instance
} else {
  second; // hover over `second` and you'll see it's an object
}
second; // hover over `second` and you'll see it's an object or an error again

// Discriminated/Tagged Unions
//  A discriminated union is a union type that has a common property that
//  allows us to narrow the type of a variable down to a specific type.
//  The common property is called a "discriminator".
if (outcome3[0] === 'failure') {
  outcome3; // hover over `outcome3` and you'll see it's a tuple of
  //  ["failure", Error]
} else {
  outcome3; // hover over `outcome3` and you'll see it's a tuple of
  //  ["success", { name: string; email: string }]
}

// Intersection Types
// Intersection types can be described as the "AND" of types.  For example,
//  what if we had a `Date`, that had extra startTime and endTime
//  properties added to it?
const ONE_WEEK = 1000 * 60 * 60 * 24 * 7;

function makeWeek(): Date & { endTime: Date } {
  const startTime = new Date();
  const endTime = new Date(startTime.valueOf() + ONE_WEEK);

  // Interesting note is we can't use the spread operator here because
  //  `Date` is not an object.  It's a primitive type.  We can use
  //  `Object.assign` to add the `endTime` property to the Date object stored
  //  in `startTime`.
  return Object.assign(startTime, { endTime }); 
}

const week = makeWeek();
// week; // hover over `week` and you'll see it's a `Date` with `endTime` added
// week.getTime(); // `Date` methods are available
// week.endTime; // `endTime` is available
console.log(week);
console.log(week.endTime);