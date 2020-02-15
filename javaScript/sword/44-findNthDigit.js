/**
 * https://leetcode-cn.com/problems/shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof/
 * 面试题44. 数字序列中某一位的数字
 * Medium
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
    let i = 9
    let a = 1
    let remain = n
    while(i * a < remain) {
        remain -= i * a
        i *= 10
        a++
    }
    let b = remain % a
    let res = 10**(a-1) + ~~(remain / a)
    if(b === 0) {
         b = a
         res--
    }
    return res.toString()[b-1]
};