function wordPattern(pattern: string, s: string): boolean {
    let words = s.split(" ");
    let hash:Hash = {};
    if(words.length === pattern.length){
        for(let i = 0; i < pattern.length; i++){
            let key = pattern[i];
            if(key in hash){
                let val = hash[key];
                if(val !== words[i]){
                    return false;
                }else{
                    continue;
                }
            }else{
                for(const prop in hash){
                    let val = hash[prop];
                    if(val === words[i]){
                        return false;
                    }
                }
                hash[key] = words[i];
            }
        }
        return true;
    }else{
        return false;
    }
};
type Hash = {
    [key:string]:string
}
console.log(wordPattern("abba","dog dog dog dog"))
