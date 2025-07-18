One of the most powerful features when thinking of arrays as data structures, is that arrays can contain, or even be completely made up
of other arrays. We have seen arrays that contain arrays in previous challenges, but fairly simple ones. However, arrays can contain an
infinite depth of arrays that can contain other arrays, each with their own arbitrary levels of depth, and so on. In this way, an array
can very quickly become a very complex data structure, known as a multi-dimensional, or nested array. Consider the following example:

```
let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];
```

The `deep` array is nested 2 levels deep. The `deeper` arrays are 3 levels deep. The `deepest` arrays are 4 levels, and the
`deepest-est?` is 5.

While this example may seem convoluted, this level of complexity is not unheard of, or even unusual, when dealing with large amounts of
data. However, we can still very easily access the deepest levels of an array this complex with bracket notation:

```
console.log(nestedArray[2][1][0][0][0]);
```

This logs the string `deepest-est?`. And now that we know where that piece of data is, we can reset it if we need to:

```
nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
```

Now it logs `deeper still`.

We have defined a variable, `myNestedArray`, set equal to an array. Modify `myNestedArray`, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string `deep`, on the fourth level, include the string `deeper`, and on the fifth level, include the string `deepest`.

```
let myNestedArray = [
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  [
    ['deep', false, true, 'spread', 'array'],
    [
      ['deeper', 1327.98, 'splice', 'slice', 'push'],
      [
        ['deepest', 1.3849, 7, '8.4876', 'arbitrary', 'depth']
      ]
    ]
  ]
];
```