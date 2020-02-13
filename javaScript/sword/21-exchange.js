/**
 * https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
 * 面试题21. 调整数组顺序使奇数位于偶数前面
 * Easy
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let left = 0
    let right = nums.length-1
    while(left < right) {
        let c = nums[left]
        nums[left] = nums[right]
        nums[right] = c
        while(nums[left]%2) {
            left++
        }
        while(nums[right]%2===0) {
            right--
        }
    }
    return nums
};