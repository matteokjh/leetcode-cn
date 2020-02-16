/**
 * https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/
 * 面试题57. 和为s的两个数字
 * Easy
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // let s = new Set()
    // for(let num of nums) {
    //     if(!s.has(target - num)) {
    //         s.add(num)
    //     } else {
    //         return [num, target - num]
    //     }
    // }
    let left = 0
    let right = nums.length - 1
    while(left < right) {
        let sum = nums[left] + nums[right]
        if(sum === target) {
            return [nums[left],nums[right]]
        } else if(sum > target) {
            right--
        } else {
            left++
        }
    }
    
};