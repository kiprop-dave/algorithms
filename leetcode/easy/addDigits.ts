function addDigits(num: number): number {
    if(num < 10) return num;

    let str = num.toString();
    let sum = 0;
    for(let i = 0; i < str.length; i++){
        sum += parseInt(str[i]);
    }
    return addDigits(sum);
};
