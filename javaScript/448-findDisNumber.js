/**
 * https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array/submissions/
 * 找到所有数组中消失的数字
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let n = nums.length
    let res = []
    for(let i=0;i<n;i++) {
        nums[(nums[i]-1)%n] += n
    }
    for(let i=0;i<n;i++) {
        if(nums[i] <= n) {
            res.push(i+1)
        }
    }
    return res
};