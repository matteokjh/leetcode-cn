/**
 * https://leetcode-cn.com/problems/wildcard-matching/comments/
 * 通配符匹配
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var m = s.length, n = p.length;
    var dp = [...Array(n+1)].map(()=>Array(m+1).fill('')); //构建二维数组
    dp[0][0] = true
    for(let i=1;i<=m;i++){
        dp[0][i] = false
    }
    for(let i=1;i<=n;i++) {
        if(p[i-1] === '*') {
            dp[i][0] = dp[i-1][0]
            for(let j=1;j<=m;j++) {
                dp[i][j] = dp[i][j-1] || dp[i-1][j]
            }
        } else if(p[i-1] === '?') {
            dp[i][0] = false
            for(let j=1;j<=m;j++) {
                dp[i][j] = dp[i-1][j-1]
            }
        } else {
            dp[i][0] = false
            for(let j=1;j<=m;j++) {
                dp[i][j] = s[j-1] === p[i-1] && dp[i-1][j-1]
            }
        }
    }
    return dp[n][m]
};