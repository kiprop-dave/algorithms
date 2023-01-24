/*
A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

    For example, "Hello World", "HELLO", "hello world hello world" are all sentences.

Words consist of only uppercase and lowercase English letters. Uppercase and lowercase English letters are considered different.

A sentence is circular if:

    The last character of a word is equal to the first character of the next word.
    The last character of the last word is equal to the first character of the first word.

Given a string sentence, return true if it is circular. Otherwise, return false.
*/

function isCircularSentence(sentence: string): boolean {
    let firstChar = sentence[0];
    let lastChar = sentence[sentence.length-1];
    if(firstChar !== lastChar) return false
    for(let i = 0; i < sentence.length; i++){
        if(sentence[i] !== " ") continue;
        let last = sentence[i-1];
        let next = sentence[i+1];
        if(last !== next){
            return false;
        }
    }
    return true;
};

let test = "leetcode exercises sound delightful";
console.log(isCircularSentence(test))
