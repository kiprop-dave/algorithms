const removeDuplicates = function(s) {
    let output = [];
    output.push(s[0]);
    for(let i = 1; i < s.length; i++){
        if(s[i] !== output[output.length - 1]){
            output.push(s[i]);
        }else{
            output.pop();
        }
    }
    return output.join('');
};


const s1 = "azxxzy";
const s2 = "abbaca";
const s3 = "aababaab";
console.log(removeDuplicates(s3));