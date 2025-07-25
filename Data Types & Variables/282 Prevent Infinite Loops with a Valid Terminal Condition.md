The final topic is the dreaded infinite loop. Loops are great tools when you need your program to run a code block a certain number of
times or until a condition is met, but they need a terminal condition that ends the looping. Infinite loops are likely to freeze or
crash the browser, and cause general program execution mayhem, which no one wants.

There was an example of an infinite loop in the introduction to this section - it had no terminal condition to break out of the `while`
loop inside `loopy()`. Do NOT call this function!

```
function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
```

It's the programmer's job to ensure that the terminal condition, which tells the program when to break out of the loop code, is
eventually reached. One error is incrementing or decrementing a counter variable in the wrong direction from the terminal condition.
Another one is accidentally resetting a counter or index variable within the loop code, instead of incrementing or decrementing it.

The `myFunc()` function contains an infinite loop because the terminal condition `i != 4` will never evaluate to `false` (and break the
looping) - `i` will increment by 2 each pass, and jump right over 4 since `i` is odd to start. Fix the comparison operator in the
terminal condition so the loop only runs for `i` less than or equal to 4.

```
function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}
```