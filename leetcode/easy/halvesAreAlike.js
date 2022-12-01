const halvesAreAlike = function(s) {
    const half = Math.floor((s.length)/2);
    let i=0;
    let j=half;
    
    const vowels = new Set(["a","e","i","o","u"]);
    const sub1 = [];
    const sub2 = [];
    while(i < half && j < s.length){
        if(vowels.has(s[i].toLowerCase())){
            sub1.push(s[i]);
        }
        if(vowels.has(s[j].toLowerCase())){
            sub2.push(s[j]);
        }
        i++;
        j++;
    }
    if(sub1.length === sub2.length){
        return true;
    }
    return false;
};

console.log(halvesAreAlike("textbook"));