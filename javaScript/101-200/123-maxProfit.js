/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iii/
 * 123. 买卖股票的最佳时机 III
 * Hard
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let a = c = -Infinity
    let b = d = 0
    for(let p of prices) {
        a = Math.max(a, -p)
        b = Math.max(b, a + p)
        c = Math.max(c, b - p)
        d = Math.max(d, c + p)
    }
    return d
};