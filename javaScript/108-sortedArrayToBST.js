/**
 * https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/
 * 将有序数组转换为二叉搜索树
 * Easy
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    function func(start,end) {
        if(start > end) return null
        let mid = start + ((end - start) >> 1)
        let res = new TreeNode(nums[mid])
        res.left = func(start,mid - 1)
        res.right = func(mid+1,end)
        return res
    }
    return func(0,nums.length-1)
};