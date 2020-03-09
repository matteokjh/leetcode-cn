/**
 * https://leetcode-cn.com/problems/magic-index-lcci/
 * 面试题 08.03. 魔术索引
 * Easy
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function(nums) {
    let res = 1000001
    function func(left, right) {
        if(left > right) {
            return
        }
        let mid = left + ~~((right-left)/2)
        if(nums[mid] === mid) {
            res = Math.min(res, mid)
        }
        func(left, mid-1)
        func(mid+1, right)
    }
    func(0, nums.length)
    return res === 1000001 ? -1 : res
};