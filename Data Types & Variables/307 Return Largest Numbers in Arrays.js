/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
    // Use the map method to iterate through each sub-array
    return arr.map(subArray => {
        // Use the Math.max function to find the largest number in each sub-array
        return Math.max(...subArray);
    });
      return arr;
}

// Alternatively, you can use the reduce method to find the largest number in each sub-array:
function largestOfFour(arr) {
    return arr.map(subArray => {
        return subArray.reduce((max, current) => {
            return current > max ? current : max;
        }, -Infinity);
    });
}

// Another approach is to use a for loop to iterate through the sub-arrays:
function largestOfFour(arr) {
    const largestNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        let largest = arr[i][0]; // Start with the first element of the sub-array
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > largest) {
                largest = arr[i][j]; // Update largest if a larger number is found
            }
        }
        largestNumbers.push(largest); // Add the largest number to the result array
    }
    return largestNumbers;
}

// Example usage:

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

// Expected output: [5, 27, 39, 1001]
// This will return an array containing the largest numbers from each sub-array.

largestOfFour([
    [13, 27, 18, 26], 
    [4, 5, 1, 3], 
    [32, 35, 37, 39], 
    [1000, 1001, 857, 1]
]);
// Expected output: [27, 5, 39, 1001]

largestOfFour([
    [4, 9, 1, 3], 
    [13, 35, 18, 26], 
    [32, 35, 97, 39], 
    [1000000, 1001, 857, 1]
]);
// Expected output: [9, 35, 97, 1000000]

largestOfFour([
    [17, 23, 25, 12], 
    [25, 7, 34, 48], 
    [4, -10, 18, 21], 
    [-72, -3, -17, -10]
]);
// Expected output: [25, 48, 21, -3]