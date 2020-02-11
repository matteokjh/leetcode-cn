/**
 * https://leetcode-cn.com/problems/diameter-of-binary-tree/
 * 二叉树的直径
 * Easy
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let res = 0
    function func(root) {
        if(!root) return -1
        let left = root.left ? func(root.left) + 1 : 0
        let right = root.right ? func(root.right) + 1 : 0
        res = Math.max(res,left+right)
        return Math.max(left,right)
    }
    func(root)
    return res
};