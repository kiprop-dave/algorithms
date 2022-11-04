const reverseString = function(s) {
    if(s.length < 2){
        return;
    }
    const length = s.length;
    const cent = Math.floor(length/2);
    for(let i = 0; i < cent; i++){
        [s[i],s[length - 1 - i]] = [s[length - 1 - i],s[i]];
    }
};

const test1 = ['h','e','l','l','o','s'];
reverseString(['h']);