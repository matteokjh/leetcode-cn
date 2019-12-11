/**
 * https://leetcode-cn.com/problems/partition-equal-subset-sum/
 * 分割等和子集
 * Medium
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    // 二维dp
    let sum = nums.reduce((acc,cur)=>acc+cur)
    if(sum % 2 !== 0) return false
    let target = sum / 2
    let dp = [...new Array(nums.length)].map(()=>Array(target+1).fill(false))
    for(let i=0;i<target+1;i++){
        dp[0][i] = nums[0] === i ? true : false
    }
    for(let i=1;i<nums.length;i++) {
        for(let j=0;j<target+1;j++) {
            if(nums[i] <= j) {
                dp[i][j] = dp[i-1][j] || dp[i-1][j - nums[i]]
            } else {
                dp[i][j] = dp[i-1][j]
            }
        }
    }
    return dp[nums.length-1][target]
};