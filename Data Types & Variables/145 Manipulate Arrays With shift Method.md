`pop()` always removes the last element of an array. What if you want to remove the first?

That's where `.shift()` comes in. It works just like `.pop()`, except it removes the first element instead of the last.

Example:
```
const testArray = ["Stimpson", "J", ["cat"]];
const removedFromTestArray = testArray.shift();
```

`removedFromTestArray` would have a value of the string `Stimpson`, and `testArray` would have `["J", ["cat"]]`.