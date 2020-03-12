/**
 * https://leetcode-cn.com/problems/coin-lcci/
 * 面试题 08.11. 硬币
 * Medium
 * @param {number} n
 * @return {number}
 */
var waysToChange = function(n) {
    let MOD = 1e9+7
    let dp = new Array(n+1).fill(0)
    dp[0] = 1
    let coins = [1, 5, 10, 25]
    for(let coin of coins) {
        for(let i = coin;i <= n;i++) {
            dp[i] = (dp[i] + dp[i-coin]) % MOD
        }
    }
    return dp[n]
};