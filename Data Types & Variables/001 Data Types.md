# Data Types

Programming languages all have built-in data structures. There are different data types in JavaScript. It’s important to understand what type of data you’re dealing with as you’re writing code, and knowing the types of data are available to you is the first step.

Javascript has seven primitive data types:

`Boolean`
`undefined`
`null`
`Number`
`String`
`Symbol`
`BigInt`

All types except Object define immutable values represented directly at the lowest level of the language. We refer to values of these types as "primitive values".

All primitive types, except `null`, can be tested by the `typeof` operator. `typeof null` returns "object", so one has to use `=== null` to test for `null`.

All primitive types, except `null` and `undefined`, have their corresponding object wrapper types, which provide useful methods for working with the primitive values. For example, the `Number` object provides methods like `toExponential()`. When a property is accessed on a primitive value, JavaScript automatically wraps the value into the corresponding wrapper object and accesses the property on the object instead. However, accessing a property on `null` or `undefined` throws a `TypeError` exception, which necessitates the introduction of the optional chaining operator.