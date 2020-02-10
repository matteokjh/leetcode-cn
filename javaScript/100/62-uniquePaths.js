/**
 * https://leetcode-cn.com/problems/unique-paths/
 * 不同路径
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let res = 0;
    // 超时
    // function func(a,b){
    //     if(a == m-1 && b == n-1){
    //         res++;
    //         return;
    //     }
    //     if(a < m){
    //         func(a+1,b)
    //     }
    //     if(b < n){
    //         func(a,b+1);
    //     }
    // }
    // func(0,0)
    // return res

    // dp
    // let dp = [...new Array(m)].map(()=>Array(n).fill(0))
    // for(let i=0;i<m;i++){
    //     for(let j=0;j<n;j++){
    //         if(i == 0 || j == 0){
    //             dp[i][j] = 1
    //         }else {
    //             dp[i][j] = dp[i-1][j] + dp[i][j-1]
    //         }
    //     }
    // }
    // return dp[m-1][n-1]

    // 排列组合 C(m+n-2,Math.min(m-1,n-1))
    if(m==1 || n==1){
        return 1;
    }
    if(m<n){
        return uniquePaths(n,m)
    }
    m--;
    n--;
    let s = m+n;
    let ans = s;
    for(let i=2;i<=n;i++){
        ans *= s-i+1
        ans /= i
        console.log(s,ans)
    }
    return ans
};

let res = uniquePaths(3,7);
console.log(res)