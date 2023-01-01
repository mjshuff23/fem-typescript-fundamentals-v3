"use strict";
// Functions
const addNumbers = (a, b) => a + b;
const multiplyNumbers = (x, y) => x * y;
// Void
//  The void type is used to describe a function that does not return a value.
//  This is useful when you want to describe a function whose return value is
//   meant to be ignored
//  We could type functions as returning undefined, but there are some    
//   interesting differences that highlight the reason for void’s existence:
function invokeInFourSeconds(callback) {
    setTimeout(callback, 4000);
}
function invokeInFiveSeconds(callback) {
    setTimeout(callback, 5000);
}
const values = [];
// invokeInFourSeconds(() => values.push(1)); // Not OK.  This will throw an error because the return value of the callback is not undefined
invokeInFiveSeconds(() => values.push(2)); // OK.  This will not throw an error because the return value of the callback is void
let MyDateConstructor = Date;
const d = new MyDateConstructor();
// function handleMainEvent(
//   element: HTMLFormElement | HTMLIFrameElement,
//   handler: FormSubmitHandler | MessageHandler
// ) {}
const myFrame = document.getElementsByTagName('iframe')[0];
const myForm = document.getElementsByTagName('form')[0];
function handleMainEvent(element, handler) {
    // Implementation goes here
}
// Notice when we pass an iFrame, our function knows event is a MessageEvent
handleMainEvent(myFrame, (event) => { });
// Notice when we pass a form, our function knows data is a FormData
handleMainEvent(myForm, (data) => { });
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
function reallyHandleClick(event) {
    this.disabled = true;
}
// This will throw an error because `this` is not a button.
// reallyHandleClick(new Event("click"));
// OK WAY
function myClickHandler(event) {
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
async function getData(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = (await response.json());
        return data;
    }
}
