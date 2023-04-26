# Undefined Type

The Undefined type is inhabited by exactly one value: `undefined`.

Conceptually, `undefined` indicates the absence of a value, while `null` indicates the absence of an object (which could also make up an excuse for `typeof null === "object"`). The language usually defaults to undefined when something is devoid of a value:

A return statement with no value (return;) implicitly returns undefined.
Accessing a nonexistent object property (obj.iDontExist) returns undefined.
A variable declaration without initialization (let x;) implicitly initializes the variable to undefined.
Many methods, such as Array.prototype.find() and Map.prototype.get(), return undefined when no element is found.

`null` is a keyword, but `undefined` is a normal identifier that happens to be a global property. In practice, the difference is minor, since `undefined` should not be redefined or shadowed.

Type		typeof return value	Object wrapper
Undefined	"object"			N/A

| Type              | typeof return value | Object wrapper |
| :---------------- | :-----------------: | :------------: |
| Undefined         |  Undefined   		  | N/A 		   |