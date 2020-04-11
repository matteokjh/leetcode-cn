/**
 * https://leetcode-cn.com/problems/super-egg-drop/
 * 887. 鸡蛋掉落
 * Hard
 * @param {number} K
 * @param {number} N
 * @return {number}
 */
var superEggDrop = function (K, N) {
    let dp = [...new Array(N + 1)].map(() => Array(K + 1).fill(0));
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= K; j++) {
            dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j] + 1;
            if (dp[i][j] >= N) return i;
        }
    }
    return dp[N][K];
};
