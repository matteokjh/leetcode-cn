/**
 * https://leetcode-cn.com/problems/minimum-height-tree-lcci/
 * 面试题 04.02. 最小高度树
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
var sortedArrayToBST = function (nums) {
    function dfs(left, right) {
        if(left >= right) {
            return null
        }
        let mid = left + ~~((right - left) / 2)
        let node = new TreeNode(nums[mid])
        node.left = dfs(left, mid)
        node.right = dfs(mid+1, right)
        return node
    }
    return dfs(0, nums.length)
};