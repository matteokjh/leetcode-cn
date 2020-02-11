/**
 * https://leetcode-cn.com/problems/move-zeroes/
 * 移动零
 * Easy
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums){
    for(let i=0,j=0;i<nums.length;i++) {
        if(nums[i]) {
            let t = nums[j]
            nums[j] = nums[i]
            nums[i] = t
            j++
        }
    }
};