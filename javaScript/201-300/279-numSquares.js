/**
 * https://leetcode-cn.com/problems/perfect-squares/
 * 完全平方数
 * Medium
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    // dp
    // let dp = new Array(n+1).fill(0)
    // // f(i) = MIN(f(i),f(i - j^2))
    // for(let i=1;i<=n;i++) {
    //     dp[i] = i
    //     for(let j=1;j**2<=i;j++) {
    //         dp[i] = Math.min(dp[i],dp[i-j**2] + 1)
    //     }
    // }
    // return dp[n]

    // 数学定理
    while(n % 4 === 0) {
        n /= 4
    }
    if(n % 8 === 7) {
        return 4
    }
    let a = 0
    let b
    while(a*a <= n) {
        b = Math.floor((n - a*a)**.5)
        if(a*a + b*b === n) {
            return !!a + !!b
        }
        a++
    }
    return 3
};