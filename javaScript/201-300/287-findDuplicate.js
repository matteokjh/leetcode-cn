/**
 * https://leetcode-cn.com/problems/find-the-duplicate-number/
 * 寻找重复数
 * Medium
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    // 二分
    let len = nums.length
    let left = 1
    let right = len - 1
    while(left < right) {
        let mid = ~~((left + right) / 2)
        let count = 0
        for (let num of nums) {
            if(num <= mid) {
                count++
            }
        }
        if(count > mid) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return left
    // 快慢指针
    let fast = 0
    let slow = 0
    // 确定是 必定存在一个重复数字，可重复多次
    // 外层循环确定环的入口，内层循环寻找重复元素
    while(1) {
        fast = nums[nums[fast]]
        slow = nums[slow]
        if(fast === slow) {
            fast = 0
            while(nums[fast] !== nums[slow]) {
                fast = nums[fast]
                slow = nums[slow]
            }
            return nums[slow]
        }
    }
};

// 不违反题目的限制的话，还可以用二分法做