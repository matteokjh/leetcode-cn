/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-iv/
 * 188. 买卖股票的最佳时机 IV
 * Hard
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit_k_Inf(prices) {
    let dp_i_0 = 0
    let dp_i_1 = -Infinity
    for (let p of prices) {
        let tmp = dp_i_0
        dp_i_0 = Math.max(tmp, dp_i_1 + p)
        dp_i_1 = Math.max(dp_i_1, tmp - p)
    }
    return dp_i_0
}
var maxProfit = function (k, prices) {
    if(!k) return 0
    let n = prices.length
    if (k >= n / 2) return maxProfit_k_Inf(prices)
    let dp = [...new Array(k)].map(() => Array(2).fill(0))
    for (let i = 0; i < k; i++) {
        dp[i][1] = -Infinity
    }
    for (let p of prices) {
        dp[0][1] = Math.max(dp[0][1], -p)
        dp[0][0] = Math.max(dp[0][0], dp[0][1] + p)
        for (let i = 1; i < k; i++) {
            dp[i][1] = Math.max(dp[i][1], dp[i - 1][0] - p)
            dp[i][0] = Math.max(dp[i][0], dp[i][1] + p)
        }
    }
    return dp[k-1][0]
};