//Quick Question 1
{1, 2, 3, 4}

//2
//ref

//3
/*
  0: {Array(3) => true}
  1: {Array(3) => false}
*/

//hasDuplicate
const hasDuplicate = (arr) => new Set(arr).size !== arr.length;

//vowelCount
function isVowel(char) {
    return "aeiou".includes(char);
}

function vowelCount(str) {
    const myMap = new Map();
    for (let char of str) {
        let lowerCasedChar = char.toLowerCase();
        if (isVowel(lowerCasedChar)) {
            if (myMap.has(lowerCasedChar)) {
                myMap.set(lowerCasedChar, myMap.get(lowerCasedChar) + 1);
            } else {
                myMap.set(lowerCasedChar, 1);
            }
        }
    }
    return myMap;
}