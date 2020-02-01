/**
 * https://leetcode-cn.com/problems/fraction-to-recurring-decimal/
 * 分数到小数
 * Medium
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    if(numerator == 0) return '0'
    let res = ''
    // 负号
    if(numerator < 0 ^ denominator < 0) {
        res = '-' + res
    }
    let [a,b] = [Math.abs(numerator), Math.abs(denominator)]
    res += Math.floor(a / b)
    let remainder = a % b
    if(remainder === 0) {
        return res
    }
    res += '.'
    let map = {}
    while(remainder !== 0) {
        if(map[remainder]) {
            res = res.substr(0, map[remainder]) + '(' + res.substr(map[remainder])
            res += ')'
            break
        }
        map[remainder] = res.length
        remainder *= 10
        res += ~~(remainder / b)
        remainder %= b
    }
    return res
};