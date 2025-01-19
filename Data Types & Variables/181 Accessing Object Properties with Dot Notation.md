There are two ways to access the properties of an object: dot notation (`.`) and bracket notation (`[]`), similar to an array.

Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

Here is a sample of using dot notation (`.`) to read an object's property:

```
const exampleObj = {
  prop1: "val1",
  prop2: "val2"
};


const prop1val = exampleObj.prop1;
const prop2val = exampleObj.prop2;
```

`prop1val` would have a value of the string `val1`, and `prop2val` would have a value of the string `val2`.