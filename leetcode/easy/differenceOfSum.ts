function differenceOfSum(nums: number[]): number {
    let elSum = 0;
    let digSum = 0;
    nums.forEach((n) => {
        elSum += n;
        let sum = 0;
        while(n){
            sum += n % 10;
            n = Math.floor((n/10));
        }
        digSum += sum;
    })
    return Math.abs(elSum - digSum);
};
