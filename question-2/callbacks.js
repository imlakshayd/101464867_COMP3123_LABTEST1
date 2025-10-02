// Function that returns a Promise which resolves after 500ms
const resolvedPromise = () =>
  new Promise((resolve) => { // Return a new Promise that resolves after 500ms
    setTimeout(() => resolve({ message: 'Delayed Success!' }), 500);
  });

// Function that returns a Promise which rejects after 500ms
const rejectedPromise = () =>
  new Promise((_, reject) => { // Return a new Promise that rejects after 500ms
    setTimeout(() => reject(new Error('Delayed Exception!')), 500);
  });

// Test the functions
console.log("Testing started...");

resolvedPromise()
  .then((result) => console.log(result)) // Output: { message: 'Delayed Success!' }
  .catch((err) => console.error({ error: err.message })); // This will not be called

rejectedPromise()
  .then((result) => console.log(result)) // This will not be called
  .catch((err) => console.error({ error: err.message })); // Output: { error: 'Delayed Exception!' }


