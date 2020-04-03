/**
 * https://leetcode-cn.com/problems/subsets-ii/
 * 子集 II
 * Medium
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let n = nums.length
    let res = []
    nums.sort((a,b) => a-b)
    let m = {}
    function helper(i, tmp) {
        if(m[tmp]) return
        m[tmp] = 1
        res.push(tmp)
        for(let j=i;j<n;j++) {
            helper(j+1, tmp.concat(nums[j]))
        }
    }
    helper(0, [])
    return res
};