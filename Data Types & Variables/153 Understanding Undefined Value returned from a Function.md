A function can include the `return` statement but it does not have to. In the case that the function doesn't have a `return` statement, when you call it, the function processes the inner code but the returned value is `undefined`.

Example

```
let sum = 0;

function addSum(num) {
  sum = sum + num;
}

addSum(3);
```

`addSum` is a function without a `return` statement. The function will change the global sum variable but the returned value of the function is `undefined`.

