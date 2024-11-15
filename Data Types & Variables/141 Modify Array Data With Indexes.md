Unlike strings, the entries of arrays are mutable and can be changed freely, even if the array was declared with const.

Example

```
const numArray = [50, 40, 30];
numArray[0] = 15;
numArray now has the value [15, 40, 30].
```

Note: There shouldn't be any spaces between the array name and the square brackets, like `array [0]`. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.