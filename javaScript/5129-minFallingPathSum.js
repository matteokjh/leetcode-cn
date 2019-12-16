/**
 * https://leetcode-cn.com/problems/minimum-falling-path-sum-ii/
 * 下降路径最小和  II
 * Hard
 * @param {number[][]} arr
 * @return {number}
 */
var minFallingPathSum = function(arr) {
    if(!arr || !arr.length) return 0
    let len = arr.length
    let dp = [...new Array(len+1)].map(()=>Array(len).fill(0))
    for(let i=1;i<=len;i++) {
        for(let j=0;j<len;j++) {
            dp[i][j] = Math.min(...dp[i-1].slice(0,j).concat(dp[i-1].slice(j+1))) + arr[i-1][j]
        }
    }
    return Math.min(...dp[len])
};