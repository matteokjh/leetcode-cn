/**
 * https://leetcode-cn.com/problems/maximum-subarray/
 * 最大子序列和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) { 
    // O(n)
    let res=nums[0],sum=0;
    for(let i=0;i<nums.length;i++){
        if(sum > 0){
            sum += nums[i]
        }else{
            sum = nums[i]
        }
        res = Math.max(res,sum)
    }
    return res
};