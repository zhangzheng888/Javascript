It is common to use assignments to modify the contents of a variable. Everything to the right of the equals sign is evaluated first, here is an example:

```
sameVar = sameVar + 5;
```

`5` is added to sameVar. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the `+=` operator.

```
let anotherVar = 1;
anotherVar += 5;

console.log(anotherVar);
```

`6` would be displayed in the console for `anotherVar`.