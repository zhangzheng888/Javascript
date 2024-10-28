We can also use the `+=` operator to concatenate a string onto the end of an existing string variable. This can be very helpful to break a long string over several lines.

Note: Watch out for spaces. Concatenation does not add spaces between concatenated strings, so you'll need to add them yourself.

Example:

`let concatStr = "I come first. ";`
`concatStr += "I come second.";`

`concatStr` now has a value of the string `I come first. I come second.`.