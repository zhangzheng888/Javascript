/*
Reverse the provided string and return the reversed string.

For example, "hello" should become "olleh".
*/

function reverseString(str) {
    // Convert the string to an array, reverse it, and then join it back to a string
    str = str.split('').reverse().join('');
    // Return the reversed string
    console.log(str);
  return str;
}

// Alternatively, you can use a for loop to reverse the string:
/*
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
*/

reverseString('hello');
// should return the string olleh.

reverseString("Howdy") 
// should return the string ydwoH.

reverseString("Greetings from Earth")
// should return the string htraE morf sgniteerG.

reverseString("JavaScript is fun")
// should return the string nuf si tpircSavaJ.

reverseString("12345")
// should return the string 54321.