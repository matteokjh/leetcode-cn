/**
 * https://leetcode-cn.com/problems/unique-binary-search-trees/submissions/
 * 不同的二叉搜索树
 * Medium
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let res = 1
    // catalan
    // for(let i=0;i<n;i++) {
    //     res = 2*(2*i + 1) / (i + 2) * res
    // }
    
    // dp
    let dp = new Array(n+1).fill(0)
    dp[0] = 1
    dp[1] = 1
    for(let i=2;i<n+1;i++) {
        for(let j=1;j<i+1;j++) {
            dp[i] += dp[j-1] * dp[i-j]
        }
    }
    return dp[n]
};