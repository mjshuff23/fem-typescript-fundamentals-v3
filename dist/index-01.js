// between 500 and 1000
const RANDOM_WAIT_TIME = Math.round(Math.random() * 500) + 500;
let startTime = new Date();
let endTime; // declare the variable's type but don't assign it a value
setTimeout(() => {
    endTime = new Date();
    const time = endTime.getTime() - startTime.getTime();
    console.log(`The function took ${time} milliseconds to run.`);
}, RANDOM_WAIT_TIME);
// You can declare the function's return type, but if you're using TypeScript,
//  you shouldn't always have to. TypeScript can infer the return type of a
//  function from the return statements in the function body and the types of
//  the values being returned.  The below example is technically redundant, but
//  it's good practice to declare the return type of a function if not obvious.
function add(a, b) {
    return a + b;
}
