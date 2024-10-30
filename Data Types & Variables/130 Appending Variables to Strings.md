Just as we can build a string over multiple lines out of string literals, we can also append variables to a string using the plus equals (`+=`) operator.

Example:

```
const anAdjective = "awesome!";
let testStr = "Fridays are ";
testStr += anAdjective;
```

`testStr` would have the value `Fridays are awesome!`.