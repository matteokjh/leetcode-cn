/**
 * https://leetcode-cn.com/problems/recursive-mulitply-lcci/
 * 面试题 08.05. 递归乘法
 * Medium
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var multiply = function (A, B) {
    function func(num, t) {
        if (t === 1) return num
        if (t === 2) return num + num
        if (t % 2) {
            return func(num << 1, (t-1) / 2) + num
        } else {
            return func(num << 1, t / 2)
        }
    }
    let max = Math.max(A, B)
    let min = Math.min(A, B)
    return func(max, min)
};