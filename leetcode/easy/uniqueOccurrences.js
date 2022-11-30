const uniqueOccurrences = function(arr) {
    let hash = {};
    for(let i = 0; i < arr.length; i++){
        const key = `${arr[i]}`;
        if(hash.hasOwnProperty(key)){
            hash[key] = hash[key] + 1;
            continue;
        }
        hash[key] = 1;
    }
    let set = new Set()
    for(const key in hash){
        const value = hash[key];
        if(set.has(value)){
            return false
        }
        set.add(value)
    }
    return true;
};

console.log(uniqueOccurrences([1,2]))