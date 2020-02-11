/**
 * https://leetcode-cn.com/problems/target-sum/
 * 目标和
 * Medium
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
    let sum = nums.reduce((acc,cur)=>acc+cur,0)
    if(sum < S || (sum + S) % 2 !== 0) return 0
    let P = (sum + S) / 2
    let dp = new Array(P+1).fill(0)
    dp[0] = 1
    for(let i=0;i<nums.length;i++) {
        for(let j=P;j>nums[i]-1;j--) {
            dp[j] += dp[j-nums[i]]
        }
    }
    return dp[P]
};