/*
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number. 
For the purpose of this challenge, do not use the built-in .repeat() method.
*/

function repeatStringNumTimes(str, num) {    
    if (num <= 0) {
        return '';
    }

    let result = '';
    for (let i = 0; i < num; i++) {
        result += str;
    }

    return result;

}

repeatStringNumTimes('abc', 3);
// Should return 'abcabcabc'.

repeatStringNumTimes("*", 3);
// Should return the string '***'.

repeatStringNumTimes("abc", -2)
// Should return an empty string ''.

repeatStringNumTimes("abc", 0)
// Should return an empty string ''.

repeatStringNumTimes("*", 8)
// Should return the string '********'.