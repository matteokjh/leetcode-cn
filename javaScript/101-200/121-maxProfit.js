/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * 121. 买卖股票 I
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let a = 0
    let b = Infinity
    for(let p of prices) {
        a = Math.max(a, p - b)
        b = Math.min(b, p)
    }
    return a
};