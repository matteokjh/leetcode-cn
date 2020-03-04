/**
 * https://leetcode-cn.com/problems/successor-lcci/
 * 面试题 04.06. 后继者
 * Medium
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    if(!root) return null
    let res = inorderSuccessor(root.left, p)
    if(res) return res
    if(root.val > p.val) return root
    return inorderSuccessor(root.right, p)
};