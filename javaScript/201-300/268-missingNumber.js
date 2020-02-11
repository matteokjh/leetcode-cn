/**
 * https://leetcode-cn.com/problems/missing-number/
 * 缺失数字
 * Easy
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let res = nums.length
    for(let i=0;i<nums.length;i++) {
        res = res ^ i ^ nums[i]
        console.log(res)
    }
    return res
};