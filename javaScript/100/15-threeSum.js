/**
 * https://leetcode-cn.com/problems/3sum/
 * 三数之和
 * Medium
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let len = nums.length;
    let res = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        if (nums[i] === nums[i - 1]) continue;
        if (nums[i] > 0) break;
        let j = i + 1;
        let k = len - 1;
        while (j < k) {
            let sum = nums[j] + nums[k] + nums[i];
            if (sum === 0) {
                res.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] === nums[j - 1]) j++;
                while (j < k && nums[k] === nums[k + 1]) k--;
            } else if (sum > 0) {
                k--;
                while (j < k && nums[k] === nums[k + 1]) k--;
            } else {
                j++;
                while (j < k && nums[j] === nums[j - 1]) j++;
            }
        }
    }
    return res;
};
