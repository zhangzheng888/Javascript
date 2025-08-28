/*
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. 
For the purpose of this challenge, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {
    for (var i = 0; i < num; i++) {
        // If num is less than or equal to 0, return an empty string
        if (num <= 0) {
            return '';
        }
        // Concatenate the string to itself num times
        str += str;
    }
    // Return the final repeated string
    return str
}

repeatStringNumTimes('abc', 3);
// Should return 'abcabcabc'.

repeatStringNumTimes("*", 3);
// Should return the string '***'.

repeatStringNumTimes("abc", -2)
// Should return an empty string ''.