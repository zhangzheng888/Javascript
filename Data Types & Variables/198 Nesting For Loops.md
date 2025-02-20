If you have a multi-dimensional array, you can use the same logic as the prior waypoint 
to loop through both the array and any sub-arrays. Here is an example:

```
const exampleArray = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < exampleArray.length; i++) {
  for (let j = 0; j < exampleArray[i].length; j++) {
    console.log(exampleArray[i][j]);
  }
}
```

This outputs each sub-element in `exampleArray` one at a time. Note that for the inner loop, 
we are checking the `.length` of `exampleArray[i]`, since `exampleArray[i]` is itself an array.

Modify function `multiplyAll` so that it returns the product of all the numbers in the sub-arrays of `arr`.

```
function multiplyAll(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}
```

`console.log(multiplyAll([[1, 2], [3, 4], [5, 6, 7]]));` // Output should be 5040