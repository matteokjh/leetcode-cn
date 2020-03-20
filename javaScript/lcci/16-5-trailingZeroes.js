/**
 * https://leetcode-cn.com/problems/factorial-zeros-lcci/
 * 面试题 16.05. 阶乘尾数
 * Easy
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let res = 0
    let t = 5
    while(t <= n) {
        res += ~~(n / t)
        t *= 5
    }
    return res
};