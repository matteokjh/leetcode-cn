/**
 * https://leetcode-cn.com/problems/non-decreasing-array/
 * 665. 非递减数列
 * Easy
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let t = 1
    for(let i=1;i<nums.length;i++) {
        if(!~t) break
        if(nums[i] < nums[i-1]) {
            if(i > 1 && nums[i-2] > nums[i]) {
                nums[i] = nums[i-1]
            } else {
                nums[i-1] = nums[i]
            }
            t--
        }
    }
    return ~t
};