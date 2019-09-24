/**
 * https://leetcode-cn.com/problems/jump-game-ii/
 * 跳跃II
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if(nums.length <= 1) {
        return 0
    }
    let count = 0
    let next = nums[0]
    let reach = 0
    for(let i=0;i<nums.length-1;i++) {
        next = Math.max(i + nums[i], next)
        if(next >= nums.length - 1) {
            return count + 1
        }
        if(i === reach) {
            count++
            reach = next
        }
    }
    return next
};