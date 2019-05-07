/**
 * https://leetcode-cn.com/problems/power-of-two
 * 是不是2的幂
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return Math.log2(n) == ~~(Math.log2(n))
    // if(n<=0) return false; if((n&n-1)==0) return true; return false;
};