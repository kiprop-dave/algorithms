// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is a palindrome while 123 is not.


const reverse = num => {
    const str = num.toString();
    const reversed = [];
    let i,n;
    n = str.length;
    for(i = n-1; i >= 0; i--){
        reversed.push(str[i]);
    }
    
    const reverseStr = reversed.toString();
    const noCommas = reverseStr.replaceAll(',','');
    if(noCommas === str){
        return true;
    }else{
        return false;
    }
    
}

const testString = -121;
console.log(reverse(testString));