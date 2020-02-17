/**
 * https://leetcode-cn.com/problems/bu-ke-pai-zhong-de-shun-zi-lcof/
 * 面试题61. 扑克牌中的顺子
 * Easy
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
    let zeroCnt = 0
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length - 1;i++) {
        if(nums[i] === 0) zeroCnt++
        else {
            if(nums[i] === nums[i+1]) return false
            else if(nums[i] === nums[i+1] - 1) {
                continue
            } else if(nums[i] >= nums[i+1] - zeroCnt - 1) {
                zeroCnt--
            } else {
                return false
            }
        }
        if(zeroCnt < 0) return false
    }
    return true
};