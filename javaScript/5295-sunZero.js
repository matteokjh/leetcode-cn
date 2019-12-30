/**
 * https://leetcode-cn.com/problems/find-n-unique-integers-sum-up-to-zero/
 * 和为零的N个唯一整数
 * Easy
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let res = n % 2 === 0 ? [] : [0]
    let a = 1
    while(res.length < n) {
        res.unshift(-a)
        res.push(a)
        a++
    }
    return res
};