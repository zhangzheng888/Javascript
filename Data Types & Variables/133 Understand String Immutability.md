In JavaScript, `String` values are immutable, which means that they cannot be altered once created.

For example, the following code will produce an error because the letter `K` in the string `Kevin` cannot be changed to the letter `D`:

```
let nameStr = "Kevin";
nameStr[0] = "D";
```

Note that this does not mean that `nameStr` could not be re-assigned. The only way to change `nameStr` would be to assign it with a new value, like this:

```
let nameStr = "Kevin";
nameStr = "Devin";
```