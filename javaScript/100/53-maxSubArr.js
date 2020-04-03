/**
 * https://leetcode-cn.com/problems/maximum-subarray/
 * 最大子序列和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = nums[0];
    let tmp = 0;
    for (let num of nums) {
        if (tmp > 0) {
            tmp += num;
        } else {
            tmp = num;
        }
        res = Math.max(res, tmp);
    }
    return res;
};
