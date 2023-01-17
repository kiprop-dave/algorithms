function majorityElement(nums: number[]): number[] {
    let res:number[] = [];
    let hash: map = {};
    let s = Math.floor((nums.length)/3);
    nums.forEach((el) => {
        let ex = res.includes(el);
        if(el in hash){
            hash[el] = hash[el] + 1;
            if(hash[el] > s && !ex){
                res.push(el);
            }
        }else{
            hash[el] = 1;
            if(hash[el] > s && !ex){
                res.push(el);
            }
        }
    })
    return res;
};

type map = {
    [key:string]:number
}
