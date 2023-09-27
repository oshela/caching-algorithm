// Simple caching object
const cache = {};

// Expensive function to simulate data fetching or computation
function expensiveFunction(key) {
  // Check if the result is already cached
  if (cache[key]) {
    console.log(`Using cached result for key: ${key}`);
    return cache[key];
  } else {
    // Simulate some time-consuming operation
    const result = calculateResult(key);
    // Store the result in the cache
    cache[key] = result;
    console.log(`Calculating result for key: ${key}`);
    return result;
  }
}

// Function to simulate a time-consuming operation
function calculateResult(key) {
  // Simulate a delay (e.g., fetching data from a server)
  // In a real application, this could be an API request, database query, etc.
  const delay = 1000; // 1 second delay
  const startTime = Date.now();
  while (Date.now() - startTime < delay) {
    // Busy-wait to simulate work
  }
  return `Result for key: ${key}`;
}

// Example usage
console.log(expensiveFunction('A')); // Calculates and caches result
console.log(expensiveFunction('B')); // Calculates and caches result
console.log(expensiveFunction('A')); // Uses cached result for 'A'
console.log(expensiveFunction('C')); // Calculates and caches result
console.log(expensiveFunction('B')); // Uses cached result for 'B'
