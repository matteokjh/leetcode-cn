/**
 * https://leetcode-cn.com/problems/regular-expression-matching/
 * 正则匹配 --- dp 是照抄一个评论的答案
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    var m = s.length, n = p.length;
    console.log(m,n)
    var dp = [...Array(m+1)].map(()=>Array(n+1).fill('')); //构建二维数组
    dp[0][0] = true;
    for (let i = 0; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] == '*') {
                dp[i][j] = dp[i][j - 2] || 
                (
                    i && dp[i - 1][j] && 
                    (
                        s[i - 1] == p[j - 2] || 
                        p[j - 2] == '.'
                    )
                );
            } else {
                dp[i][j] = i && dp[i - 1][j - 1] && (s[i - 1] == p[j - 1] || p[j - 1] == '.');
            }
        }
    }
    console.log(dp)
    return dp[m][n];
};