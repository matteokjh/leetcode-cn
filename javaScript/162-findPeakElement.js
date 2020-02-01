/**
 * https://leetcode-cn.com/problems/find-peak-element/
 * 寻找峰值
 * Medium
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let len = nums.length
    let left = 0
    let right = len - 1
    while(left < right) {
        let mid = left + ~~((right - left) / 2)
        if(nums[mid] > nums[mid+1]) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
};