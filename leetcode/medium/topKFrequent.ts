function topKFrequent(nums: number[], k: number): number[] {
    let hash:Hash = {};
    let output:number[] = [];
    nums.forEach((el) => {
        if(el in hash){
            let val = hash[el]
            hash[el] = val+1;
        }else{
            hash[el] = 1;
        }
    })
    let order = [];
    for(const key in hash){
        let obj = {
            el:parseInt(key),
            num:hash[key]
        }
        order.push(obj);
    }
    order.sort((a,b) => b.num - a.num)
    let out = order.slice(0,k);
    out.forEach((el) => output.push(el.el))
    return output
};

type Hash = {
    [key:string]:number
}

let data = [1,1,1,2,2,3];
console.log(topKFrequent(data,2));
