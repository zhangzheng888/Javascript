/*
The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
*/

function convertCtoF(celsius) {
  let fahrenheit = (9/5 * celsius) + 32;
  return fahrenheit;
}

convertCtoF(30);
// The function will return 86, which is the Fahrenheit equivalent of 30 degrees Celsius.

convertCtoF(0);
// The function will return 32, which is the Fahrenheit equivalent of 0 degrees Celsius.

convertCtoF(-30)
// The function will return -22, which is the Fahrenheit equivalent of -30 degrees Celsius.

convertCtoF(-10)
// The function will return 14, which is the Fahrenheit equivalent of -10 degrees Celsius.

convertCtoF(20)
// The function will return 68, which is the Fahrenheit equivalent of 20 degrees Celsius.