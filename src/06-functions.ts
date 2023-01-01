// Functions

// Callable Types
//  Both types aliases and interfaces can be used to describe a call signatures.
//    A call signature is a function type that describes the types of the
//    parameters and the return type of a function.
interface TwoNumberOperation {
  (a: number, b: number): number;
}

type TwoNumberCalculation = (a: number, b: number) => number;

const addNumbers: TwoNumberOperation = (a, b) => a + b;
const multiplyNumbers: TwoNumberCalculation = (x, y) => x * y;

// Void
//  The void type is used to describe a function that does not return a value.
//  This is useful when you want to describe a function whose return value is
//   meant to be ignored
//  We could type functions as returning undefined, but there are some    
//   interesting differences that highlight the reason for void’s existence:
function invokeInFourSeconds(callback: () => undefined) {
  setTimeout(callback, 4000);
}
function invokeInFiveSeconds(callback: () => void) {
  setTimeout(callback, 5000);
}

const values: number[] = [];
// invokeInFourSeconds(() => values.push(1)); // Not OK.  This will throw an error because the return value of the callback is not undefined
invokeInFiveSeconds(() => values.push(2)); // OK.  This will not throw an error because the return value of the callback is void

// Construct Signatures
//  Construct signatures are similar to call signatures, except they describe
//   what should happen when we use the `new` keyword to create an instance of
//   a class.
interface DateConstructor {
  new (value?: number): Date;
}

let MyDateConstructor: DateConstructor = Date;
const d = new MyDateConstructor();

// Function Overloads
//  Function overloads are a way to describe multiple call signatures for a
//   function.  This is useful when you want to describe a function that can
//   accept different types of parameters.

/*
  Imagine the following situation:

  <iframe src="https://example.com" />
  <!-- // -->
  <form>
    <input type="text" name="name" />
    <input type="text" name="email" />
    <input type="password" name="password" />
    <input type="submit" value="Login" />
  </form>

  What if we had to create a function that allowed us to register a “main event listener”?
    If passed form element, allow registration of a “submit callback”
    If passed iframe element, allow registration of a ”postMessage callback”
*/
// Type alias for a function that takes a FormData object and returns void
type FormSubmitHandler = (data: FormData) => void; 
// Type alias for a function that takes a MessageEvent object and returns void
type MessageHandler = (event: MessageEvent) => void;

// function handleMainEvent(
//   element: HTMLFormElement | HTMLIFrameElement,
//   handler: FormSubmitHandler | MessageHandler
// ) {}

const myFrame = document.getElementsByTagName('iframe')[0];
const myForm = document.getElementsByTagName('form')[0];

// handleMainEvent(myFrame, (val) => {
//   // val is of type any because we don't know what type of element we're 
//   //  dealing with.  We are allowing for combinations that we shouldn't.
//   //   If given an iframe, we should expect a MessageEvent
//   //   If given a form, we should expect a FormData
// })

// We can solve this problem by using function overloads, where we define
//  multiple function heads that serve as entry points to a single
//  implementation of the function body.
function handleMainEvent(
  element: HTMLFormElement,
  handler: FormSubmitHandler
): void
function handleMainEvent(
  element: HTMLIFrameElement,
  handler: MessageHandler
): void
function handleMainEvent(
  element: HTMLFormElement | HTMLIFrameElement,
  handler: FormSubmitHandler | MessageHandler
) {
  // Implementation goes here
}

// Notice when we pass an iFrame, our function knows event is a MessageEvent
handleMainEvent(myFrame, (event) => {});
// Notice when we pass a form, our function knows data is a FormData
handleMainEvent(myForm, (data) => {});

// `this` types
//  Sometimes we have a free-standing function that has a strong opinion about
//   what `this` should be.  For example, if we had a DOM Event listener:
//  <button onclick="handleClick">Click Me</button>
//   We could define handleClick like so:
// function handleClick(event: Event) {
//   this.disabled = true;
// }

// handleClick(new Event("click"));

// `this` is implicitly of type any, which is not ideal.  We can use a `this`
//  type to describe what `this` should be.
function reallyHandleClick(this: HTMLButtonElement, event: Event) {
  this.disabled = true;
}

// This will throw an error because `this` is not a button.
// reallyHandleClick(new Event("click"));

// OK WAY
function myClickHandler(this: HTMLButtonElement, event: Event) {
  this.disabled = true;
}

const myButton = document.getElementsByTagName('button')[0];

// bind the function to the button
const boundHandler = myClickHandler.bind(myButton);
boundHandler(new Event("click"));
// or
myClickHandler.call(myButton, new Event("click"));
// or
myClickHandler.apply(myButton, [new Event("click")]);

// Function Type Best Practices
// Explicitly Defined Return Types
//  It is a good idea to explicitly define the return type of a function.
//  Consider the following example:
// export async function getData(url: string) {
//   const response = await fetch(url);
//   if (response.ok) {
//     const data = (await response.json()) as { properties: string[] }
//     return data;
//   }
// }

// function loadData() {
//   getData("https://example.com")
//     .then((result) => {
//       console.log(result.properties.join(", "));
//     });
// }

// loadData();
// // and what if we made a seemingly innocent change
// export async function getData2(url: string) {
//   const response = await fetch(url);
//   if (response.ok) {
//     const data = (await response.json()) as { properties: string[] }
//     return data;
//   }
// }

// function loadData2() {
//   getData2("https://example.com")
//     .then((result) => {
//       console.log(result.properties.join(", "));
//     });
// }

async function getData(url: string): Promise<{ properties: string[] } | undefined>  {
  const response = await fetch(url);
  if (response.ok) {
    const data = (await response.json()) as { properties: string[] };
    return data;
  }
}