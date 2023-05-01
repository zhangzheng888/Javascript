# BigInt Type

The `BigInt` type is a numeric primitive in JavaScript that can represent integers with arbitrary magnitude. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit (`Number.MAX_SAFE_INTEGER`) for Numbers.

A BigInt is created by appending n to the end of an integer or by calling the `BigInt()` function.

This example demonstrates where incrementing the Number.MAX_SAFE_INTEGER returns the expected result:

```
// BigInt
const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal

// Number
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true because both are 9007199254740992
```

You can use most operators to work with BigInts, including `+`, `*`, `-`, `**`, and `%` — the only forbidden one is `>>>`. A BigInt is not strictly equal to a Number with the same mathematical value, but it is loosely so.

BigInt values are neither always more precise nor always less precise than numbers, since BigInts cannot represent fractional numbers, but can represent big integers more accurately. Neither type entails the other, and they are not mutually substitutable. A `TypeError` is thrown if BigInt values are mixed with regular numbers in arithmetic expressions, or if they are implicitly converted to each other.

| Type              | typeof return value | Object wrapper |
| :---------------- | :-----------------: | :------------: |
| BigInt            | `bigint`     	      | `BigInt` 	   |