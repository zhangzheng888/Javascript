# Number Type

The `Number` type is a double-precision 64-bit binary format IEEE 754 value. It is capable of storing positive floating-point numbers between 2-1074 (`Number.MIN_VALUE`) and 21024 (`Number.MAX_VALUE`) as well as negative floating-point numbers between -2-1074 and -21024, but it can only safely store integers in the range -(253 − 1) (`Number.MIN_SAFE_INTEGER`) to 253 − 1 (`Number.MAX_SAFE_INTEGER`). Outside this range, JavaScript can no longer safely represent integers; they will instead be represented by a double-precision floating point approximation. You can check if a number is within the range of safe integers using `Number.isSafeInteger()`.

Values outside the range ±(2-1074 to 21024) are automatically converted:

Positive values greater than `Number.MAX_VALUE` are converted to `+Infinity`.
Positive values smaller than `Number.MIN_VALUE` are converted to `+0`.
Negative values smaller than `-Number.MAX_VALUE` are converted to `-Infinity`.
Negative values greater than `-Number.MIN_VALUE` are converted to `-0`.
`+Infinity` and `-Infinity` behave similarly to mathematical infinity, but with some slight differences.

The Number type has only one value with multiple representations: 0 is represented as both `-0` and `+0` (where `0` is an alias for `+0`). In practice, there is almost no difference between the different representations; for example, +0 === -0 is true. However, you are able to notice this when you divide by zero:

```
console.log(42 / +0); // Infinity
console.log(42 / -0); // -Infinity
```

`NaN` ("Not a Number") is a special kind of number value that's typically encountered when the result of an arithmetic operation cannot be expressed as a number. It is also the only value in JavaScript that is not equal to itself.

Although a number is conceptually a "mathematical value" and is always implicitly floating-point-encoded, JavaScript provides bitwise operators. When applying bitwise operators, the number is first converted to a 32-bit integer.

```
Note: Although bitwise operators can be used to represent several Boolean values within a single number using bit masking, this is usually considered a bad practice. JavaScript offers other means to represent a set of Booleans (like an array of Booleans, or an object with Boolean values assigned to named properties). Bit masking also tends to make the code more difficult to read, understand, and maintain.
```

| Type              | typeof return value | Object wrapper |
| :---------------- | :-----------------: | :------------: |
| Number            | number   		      | Number 	 	   |