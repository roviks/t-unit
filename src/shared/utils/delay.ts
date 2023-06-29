/**
 * Delays the execution of a function using `setTimeout` and returns a promise that resolves
 * after the specified delay.
 *
 * @param {number} delay - The delay in milliseconds.
 * @returns {Promise<void>} A promise that resolves after the specified delay.
 */
export default function delay(delay: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
