One of the biggest problems with declaring variables with the var keyword is that you can easily overwrite variable declarations:

```
var camper = "John";
var camper = "Tyron";
console.log(camper);
```

In the code above, the `camper` variable is originally declared as `John`, and is then overridden to be `Tyron`. The console then displays the string `Tyron`.

In a small application, you might not run into this type of problem. But as your codebase becomes larger, you might accidentally overwrite a variable that you did not intend to. Because this behavior does not throw an error, searching for and fixing bugs becomes more difficult.

A keyword called let was introduced in ES6, a major update to JavaScript, to solve this potential issue with the var keyword. You'll learn about other ES6 features in later challenges.

If you replace var with let in the code above, it results in an error:

```
let camper = "John";
let camper = "Tyron";
```

The error can be seen in your browser console.

So unlike `var`, when you use `let`, a variable with the same name can only be declared once.