/**
 * https://leetcode-cn.com/problems/next-permutation/
 * 下一个排列
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let len = nums.length;
    if (len < 2) return;
    let i = len - 1;
    while (i && nums[i] <= nums[i - 1]) {
        i--;
    }
    let a = i;
    let b = len - 1;
    while (a < b) {
        [nums[a], nums[b]] = [nums[b], nums[a]];
        a++;
        b--;
    }
    let j = i - 1;
    for (let k = i; k < len; k++) {
        if (nums[k] > nums[j]) {
            [nums[k], nums[j]] = [nums[j], nums[k]];
            break;
        }
    }
};
