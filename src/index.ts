/**
 * Create a promise that resolves after some time
 * @param n The number of milliseconds to wait before resolving
 */
function timeout(n: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, n);
  });
}

/**
 * Add three numbers
 * @param a The first number
 * @param b The second number
 */
export async function addNumbers(a: number, b: number): Promise<number> {
  await timeout(500);
  return a + b;
}

//== Run the Program ==//
(async () => {
  const result = await addNumbers(1, 2);
  console.log(result);
})();
