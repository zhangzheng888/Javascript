An array's length, like the data types it can contain, is not fixed. Arrays can be defined with a length of any number of elements, and
elements can be added or removed over time; in other words, arrays are mutable. In this challenge, we will look at two methods with
which we can programmatically modify an array: `Array.push()` and `Array.unshift()`.

Both methods take one or more elements as parameters and add those elements to the array the method is being called on; the `push()`
method adds elements to the end of an array, and `unshift()` adds elements to the beginning. Consider the following:

```
let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
```

`romanNumerals` would have the value `['XIX', 'XX', 'XXI', 'XXII']`.

```
romanNumerals.push(twentyThree);
```

`romanNumerals` would have the value `['XIX', 'XX', 'XXI', 'XXII', 'XXIII']`. Notice that we can also pass variables, which allows us
even greater flexibility in dynamically modifying our array's data.

```
function mixedNumbers(arr) {

  let unshiftArray = ['three', 2, 'I'];
  unshiftArray.forEach(item => {
    arr.unshift(item);
  });
  let pushArray = [7, 'VIII', 9];
  pushArray.forEach(item => {
    arr.push(item);
  });
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));
```

// console output
`[ 'I', 2, 'three', 'IV', 5, 'six', 7, 'VIII', 9 ]`