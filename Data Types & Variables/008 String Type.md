# String Type

The `String` type represents textual data and is encoded as a sequence of 16-bit unsigned integer values representing UTF-16 code units. Each element in the string occupies a position in the string. The first element is at index `0`, the next at index `1`, and so on. The length of a string is the number of UTF-16 code units in it, which may not correspond to the actual number of Unicode characters; see the String reference page for more details.

JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it. String methods create new strings based on the content of the current string — for example:

A substring of the original using `substring()`.
A concatenation of two strings using the concatenation operator (`+`) or `concat()`.

Beware of "stringly-typing" your code!
It can be tempting to use strings to represent complex data. Doing this comes with short-term benefits:

It is easy to build complex strings with concatenation.
Strings are easy to debug (what you see printed is always what is in the string).
Strings are the common denominator of a lot of APIs (input fields, local storage values, XMLHttpRequest responses when using responseText, etc.) and it can be tempting to only work with strings.

With conventions, it is possible to represent any data structure in a string. This does not make it a good idea. For instance, with a separator, one could emulate a list (while a JavaScript array would be more suitable). Unfortunately, when the separator is used in one of the "list" elements, then, the list is broken. An escape character can be chosen, etc. All of this requires conventions and creates an unnecessary maintenance burden.

Use strings for textual data. When representing complex data, parse strings, and use the appropriate abstraction.

| Type              | typeof return value | Object wrapper |
| :---------------- | :-----------------: | :------------: |
| String            | `string`     	      | `String` 	   |