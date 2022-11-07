const maximum69Number  = function(num) {
    let i;
    let output = "";
    const data = num.toString();
    let first = true;
    for(i = 0; i < data.length; i++){
        if(data[i] === "9"){
            output += data[i];
            continue;
        }else if(first){
            first = false;
            output += '9';
            continue;
        }
        output += data[i];
    }
    return parseInt(output);
};

const test = 9999;
maximum69Number(test);