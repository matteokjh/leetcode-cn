/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/
 * 714. 买卖股票的最佳时机含手续费
 * Medium
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let dp_i_0 = 0
    let dp_i_1 = -Infinity
    for(let i=0;i<prices.length;i++) {
        let tmp = dp_i_0
        dp_i_0 = Math.max(tmp, dp_i_1 + prices[i])
        dp_i_1 = Math.max(dp_i_1, tmp - prices[i] - fee)
    }
    return dp_i_0
};