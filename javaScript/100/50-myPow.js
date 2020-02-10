/**
 * https://leetcode-cn.com/problems/powx-n/comments/
 * Pow 快速幂
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // return x**n
    let res = 1
    for(let i=n;i !== 0 ;i=~~(i/2)) {
        if(i % 2 !== 0) {
            res *= x
        }
        x *= x
    }
    return n < 0 ? 1 / res : res
};