/**
 * https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
 * 面试题53 - I. 在排序数组中查找数字 I
 * Easy
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if(!nums || !nums.length) return 0
    let left = 0
    let right = nums.length - 1
    let res = 0
    while(left < right) {
        let mid = left + ~~((right-left)/2)
        if(nums[mid] < target) {
            left = mid + 1
        } else if(nums[mid] > target) {
            right = mid
        } else {
            left = mid
            right = mid
            break
        }
    }
    while(nums[left] === target) {
        res++
        left--
    }
    while(nums[++right] === target) {
        res++
    }
    return res

};