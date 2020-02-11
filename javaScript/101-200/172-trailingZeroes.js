/**
 * https://leetcode-cn.com/problems/factorial-trailing-zeroes/
 * 阶乘后的零
 * Easy
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    // 只看 5
    let res = 0
    while(n >= 5) {
        res += ~~(n / 5)
        n = ~~(n/5)
    }
    return res
};