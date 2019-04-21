/**
 * https://leetcode-cn.com/problems/palindrome-number/
 * 判断回文数
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }else if(x >= 0 && x < 10){
        return true;
    }else{
        let i = 1;
        while(1){
            if(x/Math.pow(10,i) >= 1){
                i++;
            }else{
                console.log(i)
                break;
            }
        }
        for(let j = 1; j<=Math.floor(i/2);j++){
            let a = Math.pow(10,j);
            let b = Math.pow(10,i-j);
            if(Math.floor(x%a/(a/10)) === Math.floor(x/b)%10){
                continue;
            }else{
                return false;
            }
            
        }
        return true;
    }
};