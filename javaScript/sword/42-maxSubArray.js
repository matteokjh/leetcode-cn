/**
 * https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
 * 面试题42. 连续子数组的最大和
 * Easy
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(!nums || !nums.length) return null
    let len = nums.length
    let dp = new Array(len)
    dp[0] = nums[0]
    for(let i=1;i<len;i++) {
        dp[i] = Math.max(nums[i],dp[i-1] + nums[i])
    }
    return Math.max(...dp)
};