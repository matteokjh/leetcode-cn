/**
 * https://leetcode-cn.com/problems/coin-change/
 * 零钱兑换
 * Medium
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount+1).fill(amount+1)
    dp[0] = 0
    for(let i = 1;i<=amount;i++) {
        for(let coin of coins) {
            if(coin <= i) {
                dp[i] = Math.min(dp[i-coin]+1,dp[i])
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount]
};