/**
 * https://leetcode-cn.com/problems/reverse-integer/submissions/
 * 整数反转
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    function reverse(str) {
        str = str.toString()
        let res = str.split('').reverse().join('')
        return res > 2147483647 ? 0 : res
    }
    return x < 0 ? -1 * reverse(-x) : reverse(x)
};