/**
 * https://leetcode-cn.com/problems/paths-with-sum-lcci/
 * 面试题 04.12. 求和路径
 * Medium
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */

var pathSum = function(root, sum) {
    // 前缀和
    let map = {}
    map[0] = 1
    function dfs(root, target, curSum) {
        if(!root) return 0
        curSum += root.val
        let res = 0
        res += map[curSum-target] ? map[curSum-target] : 0
        if(!map[curSum]) map[curSum] = 0
        map[curSum]++
        res += dfs(root.left, target, curSum) 
        res += dfs(root.right, target, curSum)
        map[curSum]--
        return res
    }
    return dfs(root, sum, 0)
};