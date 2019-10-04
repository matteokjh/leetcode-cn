/**
 * https://leetcode-cn.com/problems/sort-colors/submissions/
 * 颜色分类
 * Medium
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let a = 0
    let b = nums.length - 1
    let cur = 0
    while(cur <= b) {
        switch(nums[cur]){
            case 0: 
                [nums[a],nums[cur]] = [nums[cur],nums[a]]
                cur++
                a++
                break
            case 1: 
                cur++
                break
            case 2: 
                [nums[b],nums[cur]] = [nums[cur],nums[b]]
                b--
                break
        }
    }
};