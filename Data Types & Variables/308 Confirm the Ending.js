/*
 Check if a string (first argument, str) ends with the given target string (second argument, target).
* This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the 
* purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
    // Use the substring method to extract the end of the string
    // and compare it with the target string.
    var strLength = str.length;
    var targetLength = target.length;
    var startIndex = strLength - targetLength;

    // Extract the substring from the end of the string
    var endSubstring = str.substring(startIndex, strLength);
    // Check if the extracted substring matches the target
    if (endSubstring === target) {
        return true;
    }
    // If it does not match, return false
    return false;
}



confirmEnding('Bastian', 'n');
// Should return true.

confirmEnding("Congratulation", "on")
// Should return true.

confirmEnding("Connor", "n")
// Should return false.

confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")
// should return false.

confirmEnding("He has to give me a new name", "name")
// should return true.

confirmEnding("Open sesame", "same")
// should return true.

confirmEnding("Open sesame", "sage")
// should return false.

confirmEnding("Open sesame", "game")
// should return false.

confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")
// should return false.

confirmEnding("Abstraction", "action")
// should return true.