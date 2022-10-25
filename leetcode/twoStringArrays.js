const arrayStringsAreEqual = function(word1, word2) {
    let first = "";
    let second = "";
    word1.forEach(el => first +=el);
    word2.forEach(el => second +=el);
    if(first === second){
        return true;
    }
    return false;
};

const word1 = ["ab", "c"];
const word2 = ["a", "bc"];

console.log(arrayStringsAreEqual(word1,word2));