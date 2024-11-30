It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.

In this example:

```
const testVar = "Hat";

function testFun() {
  const testVar = "Head";
  return testVar;
}
```

The function `testFun` will return the string `Head` because the local version of the variable is present.