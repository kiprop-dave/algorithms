function pivotArray(nums: number[], pivot: number): number[] {
    let lt: number[] = [];
    let eq: number[] = [];
    let gt: number[] = [];
    nums.forEach((el) => {
        if(el < pivot){
            lt.push(el)
        }else if(el > pivot){
            gt.push(el)
        }else{
            eq.push(el)
        }
    })
    let output = [...lt,...eq,...gt];
    return output;
};