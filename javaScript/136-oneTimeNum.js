/**
 * https://leetcode-cn.com/problems/single-number
 * 只出现一次的数字
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((p,c)=>p^c)
};