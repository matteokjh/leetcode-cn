/**
 * https://leetcode-cn.com/problems/first-missing-positive/
 * 缺失的第一个正整数
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    for(var i = 1; i > 0; i ++) {
        if(nums.indexOf(i) < 0) {
            return i;
        }
    }
};