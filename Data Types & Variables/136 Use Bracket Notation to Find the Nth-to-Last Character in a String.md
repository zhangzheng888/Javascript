You can use the same principle we just used to retrieve the last character in a string to retrieve the Nth-to-last character.

For example, you can get the value of the third-to-last letter of the `const firstName = "Kevin"` string by using `firstName[firstName.length - 3]`

Example:

```
const firstName = "Kevin";
const thirdToLastLetter = firstName[firstName.length - 3];
```

`thirdToLastLetter` would have a value of the string `v`.