/**
 * https://leetcode-cn.com/problems/burst-balloons/
 * 戳气球
 * Hard
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    if(!nums || !nums.length) return 0
    nums = [1].concat(...nums,1)
    let len = nums.length
    let dp = [...new Array(len)].map(()=>Array(len).fill(0))
    for(let r=2;r<len;r++) {
        for(let i=0;i<len-r;i++) {
            let j=i+r
            for(let k=i+1;k<j;k++) {
                dp[i][j] = Math.max(dp[i][j],dp[i][k]+dp[k][j]+nums[i]*nums[k]*nums[j])
            }
        }
    }
    return dp[0][len-1]
};