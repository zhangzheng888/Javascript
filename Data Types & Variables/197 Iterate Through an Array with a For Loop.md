A common task in JavaScript is to iterate through the contents of an array. One way to do that is with a `for` loop. This code will output each element of the array `exampleArray` to the console:

```
const exampleArray = [10, 9, 8, 7, 6];

for (let i = 0; i < exampleArray.length; i++) {
   console.log(exampleArray[i]);
}
```

Remember that arrays have zero-based indexing, which means the last index of the array is `length - 1`. Our condition for this loop is
`i < exampleArray.length`, which stops the loop when `i` is equal to `length`. In this case the last iteration is `i === 4` i.e. when
`i` becomes equal to `exampleArray.length - 1` and outputs `6` to the console. Then `i` increases to `5`, and the loop terminates
because `i < exampleArray.length` is `false`.
