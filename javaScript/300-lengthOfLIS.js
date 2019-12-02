/**
 * https://leetcode-cn.com/problems/longest-increasing-subsequence/
 * 最长上升子序列
 * Medium
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if(!nums || !nums.length) {
        return 0
    }
    let tail = [nums[0]]
    for(let i=1;i<nums.length;i++) {
        if(nums[i] > tail[tail.length-1]) {
            tail.push(nums[i])
        } else if(nums[i] < tail[tail.length-1]) {
            let left = 0
            let right = tail.length - 1
            while(left < right) {
                let mid = ~~((left + right)/2)
                if(tail[mid] < nums[i]) {
                    left = mid + 1
                } else {
                    right = mid
                }
            }
            tail[left] = nums[i]
        }
    }
    return tail.length
};
// 动态规划 + 二分查找