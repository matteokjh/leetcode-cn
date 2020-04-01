/**
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * 搜索旋转升序数组（logn）
 * Medium
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = left + ~~((right - left) / 2)
        if (nums[mid] === target) return mid
        else if (nums[mid] < nums[right]) {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1
            } else right = mid - 1
        } else {
            if (target < nums[mid] && target >= nums[left]) {
                right = mid - 1
            } else left = mid + 1
        }
    }
    return -1
};