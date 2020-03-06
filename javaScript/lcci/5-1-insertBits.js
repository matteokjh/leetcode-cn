/**
 * https://leetcode-cn.com/problems/insert-into-bits-lcci/
 * 面试题 05.01. 插入
 * Medium
 * @param {number} N
 * @param {number} M
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var insertBits = function(N, M, i, j) {
    let res = ''
    let a = N.toString(2).split('').reverse()
    let b = M.toString(2).split('').reverse()
    let t = 0
    while(i <= j) {
        a[i] = b[t] || 0
        i++
        t++
    }
    return parseInt(a.reverse().join(''), 2)
};