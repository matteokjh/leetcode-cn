/**
 * https://leetcode-cn.com/problems/subsets/
 * 子集
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let n = nums.length
    let res = []
    function helper(i, tmp) {
        res.push(tmp)
        for(let j=i;j<n;j++) {
            helper(j+1, tmp.concat(nums[j]))
        }
    }
    helper(0, [])
    return res
};