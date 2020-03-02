/**
 * https://leetcode-cn.com/problems/check-balance-lcci/
 * 面试题 04.04. 检查平衡性
 * Easy
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function func(root) {
    if(!root) return 0
    return Math.max(func(root.left), func(root.right)) + 1
}
var isBalanced = function(root) {
    if(!root) return true
    if(!isBalanced(root.left) || !isBalanced(root.right)) return false
    return Math.abs(func(root.left) - func(root.right)) <= 1
};