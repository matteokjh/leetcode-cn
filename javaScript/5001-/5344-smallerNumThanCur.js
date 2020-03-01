/**
 * https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 * 5344. 有多少小于当前数字的数字
 * Easy
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    return nums.map(e => {
        return nums.reduce((acc,cur) => {
            return cur < e ? acc + 1 : acc
        }, 0)
    })
};