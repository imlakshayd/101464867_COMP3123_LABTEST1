function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => { // Return a new Promise that resolves to an array of lowercase words or rejects with an error
        try {
            if (!Array.isArray(mixedArray)) {
                throw new Error("This input must be an array");
            }
            const filteredArray = mixedArray
                .filter(item => typeof item === 'string') // Filter out non-string elements
                .map(word => word.toLowerCase()); // Convert each string to lowercase

            resolve(filteredArray);
        } catch (error) { // Catch any errors and reject the Promise
            reject(error);
        }
    });
}

// Test the function with a sample input:
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings', null, 'PASTa', undefined, 20, 'fRIES'];

lowerCaseWords(mixedArray)
  .then(result => console.log(result))   // Output: [ 'pizza', 'wings', 'pasta', 'fries' ]
  .catch(error => console.error(error));
