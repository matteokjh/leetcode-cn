/**
 * https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/
 * 面试题15. 二进制中1的个数
 * Easy
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let cnt = 0
    while(n) {
        cnt += n & 1
        n >>>= 1
    }
    return cnt
};