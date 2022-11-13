const reverseWords = function(s) {
    let formated = s.trim().split(' ');
    let output = [];
    for(let i = formated.length-1; i >=0; i--){
    	if(formated[i] !== ""){
    		output.push(formated[i]);
    	}
    }
    return output.join(' ');
};

const s = "a good   example";
// Output: "example good a"
console.log(reverseWords(s));