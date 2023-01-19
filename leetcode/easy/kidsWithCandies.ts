function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let largest = candies.reduce((prev,curr) => curr > prev ? curr : prev)
    console.log(largest);
    let out = candies.map((el) => {
        let s = el + extraCandies;
        console.log(s)
        if(s >= largest){
            return true
        }else{
            return false
        }
    })
    return out;
};

console.log(kidsWithCandies([2,3,5,1,3],3))
