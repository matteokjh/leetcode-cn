/**
 * https://leetcode-cn.com/problems/ugly-number/
 * 丑数
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    while(1){
        if(num % 2 == 0){
            num /= 2;
            continue;
        }
        if(num % 3 == 0){
            num /= 3;
            continue;
        }
        if(num % 5 == 0){
            num /= 5;
            continue;
        }
        if(num == 1){
            return true
        }
        break;
    }
    return false
};

let res = isUgly(1);
console.log(res)