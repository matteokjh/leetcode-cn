/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
 * 最佳买卖股票时机含冷冻期
 * Medium
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let rest = 0
    let sold = 0
    let hold = -Infinity
    for(let e of prices) {
        let pre_sold = sold
        sold = hold + e
        hold = Math.max(hold,rest - e)
        rest = Math.max(pre_sold,rest)
    }
    return Math.max(sold,rest)
};
// sold[i] = hold[i-1] + price[i]
// hold[i] = max(hold[i-1],rest[i-1]-price[i])
// rest[i] = max(rest[i-1],sold[i-1])