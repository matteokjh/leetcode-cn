/**
 * https://leetcode-cn.com/problems/peaks-and-valleys-lcci/
 * 面试题 10.11. 峰与谷
 * Medium
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    let arr = [...nums]
    arr.sort((a,b) => a-b)
    for(let i=0;i+1<nums.length;i+=2) {
        nums[i] = arr.pop()
        nums[i+1] = arr.shift()
    }
    if(arr.length) nums[nums.length-1] = arr.shift()
};