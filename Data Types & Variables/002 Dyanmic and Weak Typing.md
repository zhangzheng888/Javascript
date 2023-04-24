# Dynamic and Weak Typing

JavaScript is a dynamic language with dynamic types. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

```
let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean
```

JavaScript is also a weakly typed language, which means it allows implicit type conversion when an operation involves mismatched types, instead of throwing type errors.

```
const foo = 42; // foo is a number
const result = foo + "1"; // JavaScript coerces foo to a string, so it can be concatenated with the other operand
console.log(result); // 421
```

Implicit coercions is very convenient, but can be a potential footgun if developers didn't intend to do the conversion, or intend to convert in the other direction (for example, string to number instead of number to string). For symbols and BigInts, JavaScript has intentionally disallowed certain implicit type conversions.