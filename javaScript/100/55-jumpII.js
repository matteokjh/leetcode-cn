/**
 * https://leetcode-cn.com/problems/jump-game/submissions/
 * 跳跃游戏
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length <= 1) {
        return true
    }
    let next = 0
    for(let i=0;i < nums.length;i++) {
        if(nums[i] === 0) {
            continue
        }
        if(i > 0 && next < i) {
            return false
        }
        next = Math.max(next, nums[i] + i)
        if(next >= nums.length - 1) {
            return true
        }
    }
    return false
};