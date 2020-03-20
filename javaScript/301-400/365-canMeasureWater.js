/**
 * https://leetcode-cn.com/problems/water-and-jug-problem/
 * 365. 水壶问题
 * Medium
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
var canMeasureWater = function (x, y, z) {
    function gcd(a, b) {
        return b ? gcd(b, a % b) : Math.abs(a)
    }
    return z === 0 || x + y >= z && z % gcd(x, y) === 0
};