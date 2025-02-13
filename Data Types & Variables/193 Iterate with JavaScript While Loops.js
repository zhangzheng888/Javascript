/*
You can run the same code multiple times by using a loop.
The first type of loop we will learn is called a while loop 
because it runs while a specified condition is true and stops once that condition is no longer true.
*/

const exampleArray = [];
let i = 0;

while (i < 5) {
  exampleArray.push(i);
  i++;
}

/*
In the code example above, the while loop will execute 5 times and append the numbers 0 through 4 to ourArray.
Let's try getting a while loop to work by pushing values to an array.
*/

const testArray = [];
let index = 0;

while (index < 6) {
  testArray.unshift(i);
  i++;
}