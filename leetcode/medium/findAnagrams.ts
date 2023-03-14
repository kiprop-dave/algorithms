function findAnagrams(s: string, p: string): number[] {
    let sMap = createMap(s.slice(0,p.length));
    let pMap = createMap(p);
    let sol:number[] = [];
    for(let i = 0; i < s.length; i++){
       let eq = compareArr(sMap,pMap);
        if(eq){
            sol.push(i)
        }
        sMap[s.charCodeAt(i)-97]--;
        sMap[s.charCodeAt(i+p.length)-97]++;
    }
    return sol;
};

function createMap(s:string):number[]{
    let map = new Array<number>(26).fill(0);
    for(let i = 0; i < s.length; i++){
        map[s.charCodeAt(i)-97]++
    }
    return map
}

function compareArr(arr1:number[],arr2:number[]):boolean{
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}
