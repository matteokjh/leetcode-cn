/**
 * https://leetcode-cn.com/problems/search-insert-position/submissions/
 * 搜索插入位置
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length;
    let mid;
    while(right > left) {
        mid = (left + right) >> 1;
        if(nums[mid] == target) {
            return mid
        } else if(nums[mid] > target) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};