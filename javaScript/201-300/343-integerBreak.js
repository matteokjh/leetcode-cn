/**
 * https://leetcode-cn.com/problems/integer-break/
 * 343. 整数拆分
 * Medium
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if(n <= 3) return n-1
    let a = ~~(n / 3)
    let b = n % 3
    if(b === 1) {
        return 3**(a-1) * 2 * 2
    }
    if(b === 0) return 3**a
    return 3**a * b
};