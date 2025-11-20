/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
*/


function mutation(arr) {
    let first = arr[0].toLowerCase();
    let second = arr[1].toLowerCase();
    for (let i = 0; i < second.length; i++) {
        if (first.indexOf(second[i]) === -1) {
            return false;
        }
    }
    return true;
}

mutation(["hello", "hey"]);
// Should return false.

mutation(["hello", "Hello"]);
// Should return true.

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
// Should return true.

mutation(["Mary", "Army"]);
// Should return true.

mutation(["Mary", "Aarmy"]);
// Should return true.

mutation(["Alien", "line"]);
// Should return true.

mutation(["floor", "for"]);
// Should return true.

mutation(["hello", "neo"]);
// Should return false.

mutation(["voodoo", "no"]);
// Should return false.

mutation(["ate", "date"]);
// Should return false.