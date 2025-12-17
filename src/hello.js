/**
 * A simple hello world module that demonstrates clean code structure.
 * @module hello
 */

/**
 * Returns a greeting message.
 * @param {string} [name='World'] - The name to greet.
 * @returns {string} A greeting message.
 * @example
 * greet('Alice'); // Returns "Hello, Alice!"
 */
export function greet(name = 'World') {
  if (typeof name !== 'string') {
    throw new TypeError('Name must be a string');
  }
  
  return `Hello, ${name}!`;
}

/**
 * Returns a farewell message.
 * @param {string} [name='World'] - The name to bid farewell.
 * @returns {string} A farewell message.
 * @example
 * farewell('Alice'); // Returns "Goodbye, Alice!"
 */
export function farewell(name = 'World') {
  if (typeof name !== 'string') {
    throw new TypeError('Name must be a string');
  }
  
  return `Goodbye, ${name}!`;
}

/**
 * Main function that demonstrates the module usage.
 */
export function main() {
  console.log(greet());
  console.log(greet('JavaScript'));
  console.log(farewell('JavaScript'));
}
