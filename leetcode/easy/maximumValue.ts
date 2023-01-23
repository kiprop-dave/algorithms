/*The value of an alphanumeric string can be defined as:

    The numeric representation of the string in base 10, if it comprises of digits only.
    The length of the string, otherwise.

Given an array strs of alphanumeric strings, return the maximum value of any string in strs.
*/


function maximumValue(strs: string[]): number {
    let strTest = /[^0-9]/;
    let max = 0;
    for(let i = 0; i < strs.length; i++){
        let s = strTest.test(strs[i]);
        let val = s ? strs[i].length : parseInt(strs[i]);
        if(val > max){
            max = val;
        }
    }
    return max;
};
