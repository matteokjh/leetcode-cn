/**
 * https://leetcode-cn.com/problems/na-ying-bi/
 * LCP 06. 拿硬币
 * Easy
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function(coins) {
    return coins.map(e => Math.ceil(e / 2)).reduce((acc,cur) => acc+cur, 0)
};