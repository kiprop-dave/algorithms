function majorityElement(nums: number[]): number {
    let map:hash = {};
    let s = nums.length;
    nums.forEach((el) => {
        if (el in map){
            map[el] = map[el] + 1;
        }else{
            map[el] = 1;
        }
    })
    let large = 0
    let out:number
    for(const key in map){
        if(map[key] >= large){
            large = map[key];
            out = parseInt(key)
        }
    }
    return out
};

type hash = {
    [key:string]:number
}
