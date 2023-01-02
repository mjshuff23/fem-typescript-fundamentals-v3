// Nullish Values

// null - Means there is a value, and the value is nothing.  It is meant
//  to intentionally represent the absence of a value.
const userInfo = {
  name: "John",
  email: "john@john.com",
  secondaryEmail: null, // null is the value and is clearly intentional
}

// undefined - Means the value isn't available (yet?)
// In the example below, completedAt will be set at some point but there’s a
//  period of time when we haven’t yet set it. undefined is an unambiguous
//  indication that there may be something different there in the future:
const formInProgress = {
  createdAt: new Date(),
  data: new FormData(),
  completedAt: undefined, 
}

function submitForm() {
  // Not the best example but you get the point
  // formInProgress.completedAt = new Date()
}

// void
//  void should exclusively be used to describe that a function’s return value 
//  should be ignored
console.log(`console.log returns nothing.`)
  // (method) Console.log(...data: any[]): void

// Non-Null Assertion Operator (!.)
//  The non-null assertion operator (!.) is a way to tell TypeScript that you
//  know something is not null or undefined.  Keep in mind the value can still
//  be null or undefined, but TypeScript will not complain about it.  If the
//  value DOES turn out to be missing, you will get an error at runtime.
type GroceryCart = {
  fruits?: { name: string; quantity: number }[];
  vegetables?: { name: string; quantity: number }[];
}

const cart: GroceryCart = {};

// TypeError: Cannot read property 'push' of undefined
// cart.fruits.push({ name: "apple", quantity: 2 }); // Error
cart.fruits!.push({ name: "apple", quantity: 2 }); // No error

// I recommend against using this in your app or library code, but if your test 
//  infrastructure represents a throw as a test failure (most should) this is a 
//  great type guard to use in your test suite.
// In the above situation, if fruits was expected to be present and it’s not,
//  that’s a very reasonable test failure

// Definite Assignment Operator (!:)
//  The definite assignment operator (!:) is a way to tell TypeScript that you
//  know something is not null or undefined.  Keep in mind the value can still
//  be null or undefined, but TypeScript will not complain about it.  If the
//  value DOES turn out to be missing, you will get an error at runtime.

class ThingWithAsyncSetup {
  setupPromise: Promise<any> // ignore the <any> for now
  isSetup!: boolean // Try removing the ! and see what happens

  constructor() {
    this.setupPromise = new Promise((resolve) => {
      this.isSetup = false;
      return this.doSetup(resolve);
    }).then(() => {
      this.isSetup = true;
    })
  }

  private async doSetup(resolve: (value: unknown) => void) {
    // do some async stuff
  }
}

// TypeScript is warning me that someone could create an instance of this class 
//  and immediately attempt to access .isSetup before it gets a boolean value
// What I know (that the compiler doesn’t) is that the function passed into the 
//  Promise constructor is invoked synchronously, meaning by the time we
//  receive our instance of ThingWithAsyncSetup, the isSetup property will most 
//  certainly have a value of false.