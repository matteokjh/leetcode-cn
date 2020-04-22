/**
 * https://leetcode-cn.com/problems/chuan-di-xin-xi/
 * LCP 07. 传递信息
 * Easy
 * @param {number} n
 * @param {number[][]} relation
 * @param {number} k
 * @return {number}
 */
var numWays = function(n, relation, k) {
    let dp = new Array(n).fill(0)
    dp[0] = 1
    for(let i=0;i<k;i++) {
        let pre = new Array(n).fill(0)
        for(let r of relation) {
            pre[r[1]] += dp[r[0]]
        }
        dp = pre
    }
    return dp[n-1]
};