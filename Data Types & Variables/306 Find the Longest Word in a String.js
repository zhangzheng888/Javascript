/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
    // Split the string into an array of words 
    const words = str.split(' ');
    // Use the reduce method to find the length of the longest word
    const longestWord = words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, '');
  return str.length;
}

// Alternatively, you can use the Math.max function with the map method to find the longest word length:
function findLongestWordLength(str) {
    return Math.max(...str.split(' ').map(word => word.length));
}

// Another approach is to use a for loop to iterate through the words:
function findLongestWordLength(str) {
    let longest = 0;
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest) {
            longest = words[i].length;
        }
    }
    return longest;
}

findLongestWordLength('The quick brown fox jumped over the lazy dog');
// should return 6.

findLongestWordLength('I am a programmer');
// should return 11.

findLongestWordLength("May the force be with you");
// should return 5.

findLongestWordLength("Google do a barrel roll")
// should return 6.

findLongestWordLength("What is the average airspeed velocity of an unladen swallow");
// should return 8.

findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");
// should return 19.