Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

`.unshift()` works exactly like `.push()`, but instead of adding the element at the end of the array, `unshift()` adds the element at the beginning of the array.

Example:

```
const testArray = ["Stimpson", "J", "cat"];
testArray.shift();
testArray.unshift("Happy");
```

After the shift, `testArray` would have the value `["J", "cat"]`. After the unshift, `testArray` would have the value `["Happy", "J", "cat"]`.