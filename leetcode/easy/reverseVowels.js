const reverseVowels = function(s) {
    if(s.length < 2){
        return s;
    }
    const vowels = new Map();
    const v = ['a','e','i','o','u'];
    v.forEach(el => vowels.set(el,el));
    const sArr = s.split('');
    const vInString = [];
    for(let i = 0; i < sArr.length; i++){
        if(vowels.has(sArr[i].toLowerCase())){
            vInString.push(sArr[i]);
            sArr[i] = '_';
        }else{
            continue;
        }
    }
    for(let i = 0; i < sArr.length; i++){
        if(sArr[i] === "_"){
            const lastElement = vInString.pop();
            sArr[i] = lastElement;
        }else{
            continue;
        }
    }

    return sArr.join('');
};

const test1 = 'hello';
const test2 = 'leetcode';
console.log(reverseVowels(test2));