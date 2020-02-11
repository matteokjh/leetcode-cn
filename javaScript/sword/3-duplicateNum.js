/**
 * https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
 * 面试题03	数组中重复的数字   
 * Easy
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    let m = {}
    for(let num of nums) {
        if(m[num]) return num
        m[num] = 1
    }
};