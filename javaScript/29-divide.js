/**
 * https://leetcode-cn.com/problems/divide-two-integers/
 * 两数相除
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    //取绝对值
    if(dividend == 0){
        return 0
    }
    if(dividend == 1 << 31 && divisor == -1){
        return ~(1 << 31)
    }
    if(dividend == 1 << 31 && divisor == 1){
        return 1 << 31
    }
    let a = dividend >= 0 ? dividend : -dividend; 
    let b = divisor >= 0 ? divisor : -divisor; 
    let res = 0;
    for(let i=31;i>=0;i--){
        if(a >> i >= 0 ? a >> i >= b : -(a >> i) >= b){
            res += 1 << i;
            a -=  b << i;
        }
    }
    if((dividend ^ divisor) < 0){
        res = -res;
    }
    return res
}