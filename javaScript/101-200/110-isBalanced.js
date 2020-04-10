/**
 * https://leetcode-cn.com/problems/balanced-binary-tree/
 * 110. 平衡二叉树
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
function getHeight(root) {
    if(!root) return 0
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1
}
var isBalanced = function(root) {
    if(!root) return true
    return isBalanced(root.left) && isBalanced(root.right) && Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1
};