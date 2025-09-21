/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
    let words = str.toLowerCase().split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
}

titleCase("I'm a little tea pot");
// should return "I'm A Little Tea Pot"

titleCase("sHoRt AnD sToUt");
// should return "Short And Stout"

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
// should return "Here Is My Handle Here Is My Spout"