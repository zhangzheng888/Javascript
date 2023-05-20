# Objects

In computer science, an object is a value in memory which is possibly referenced by an identifier. In JavaScript, objects are the only mutable values. Functions are, in fact, also objects with the additional capability of being callable.

## Properties
In JavaScript, objects can be seen as a collection of properties. With the object literal syntax, a limited set of properties are initialized; then properties can be added and removed. Object properties are equivalent to key-value pairs. Property keys are either strings or symbols. Property values can be values of any type, including other objects, which enables building complex data structures.

There are two types of object properties: The data property and the accessor property. Each property has corresponding attributes. Each attribute is accessed internally by the JavaScript engine, but you can set them through `Object.defineProperty()`, or read them through `Object.getOwnPropertyDescriptor()`. You can read more about the various nuances on the `Object.defineProperty()` page.