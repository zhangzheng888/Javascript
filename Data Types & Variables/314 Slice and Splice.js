/*
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/

function frankenSplice(arr1, arr2, n) {
    let newArr = arr2.slice(); // Create a copy of arr2
    for (let i = 0; i < arr1.length; i++) {
        newArr.splice(n + i, 0, arr1[i]); // Insert elements of arr1 into newArr at index n
    }
    return newArr;
}