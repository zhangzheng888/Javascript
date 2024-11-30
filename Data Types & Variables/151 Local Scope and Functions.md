Variables which are declared within a function, as well as the function parameters, have local scope. That means they are only visible within that function.

Here is a function `scopeTest` with a local variable called `loc`.

```
function scopeTest() {
  const loc = "foo";
  console.log(loc);
}

scopeTest();
console.log(loc);
```

The `scopeTest()` function call will display the string foo in the console. The `console.log(loc)` line (outside of the `locTest` function) will throw an error, as `loc` is not defined outside of the function.