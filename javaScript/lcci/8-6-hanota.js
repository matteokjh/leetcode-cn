/**
 * https://leetcode-cn.com/problems/hanota-lcci/
 * 面试题 08.06. 汉诺塔问题
 * Easy
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @return {void} Do not return anything, modify C in-place instead.
 */
var hanota = function(A, B, C) {
    function move(num, A, B, C) {
        if(num <= 0) return
        if(num === 1) {
            C.push(A.pop())
            return
        }
        move(num-1, A, C, B)
        move(1, A, B, C)
        move(num-1, B, A, C)
    }
    if(A && A.length) {
        move(A.length, A, B, C)
    }
};