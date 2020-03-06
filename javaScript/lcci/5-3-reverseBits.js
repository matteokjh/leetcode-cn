/**
 * https://leetcode-cn.com/problems/reverse-bits-lcci/
 * 面试题 05.03. 翻转数位
 * Easy
 * @param {number} num
 * @return {number}
 */
var reverseBits = function(num) {
    let str = num.toString(2)
    let len = str.length
    if(len < 32) {
        str = ('0').repeat(32-len) + str
    }
    let a=b=0
    let res = 0
    for(let num of str) {
        if(num === '1') {
            a++
            b++
        } else {
            b = a+1
            a = 0
        }
        res = Math.max(res, a, b)
    }
    return res
};