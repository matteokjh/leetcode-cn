/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
 * 最佳买卖股票时机含冷冻期
 * Medium
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let dp_i_0 = 0
    let dp_i_1 = -Infinity
    let dp_pre = 0
    for(let i=0;i<prices.length;i++) {
        let tmp = dp_i_0
        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i])
        dp_i_1 = Math.max(dp_i_1, dp_pre - prices[i])
        dp_pre = tmp
    }
    return dp_i_0
};