/**
 * https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/
 * 面试题55 - I. 二叉树的深度
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
var maxDepth = function(root) {
    let res = 0
    function traversal(node, depth) {
        if(!node){ 
            res = Math.max(res, depth)
            return
        }
        traversal(node.left,depth+1)
        traversal(node.right,depth+1)
    }
    traversal(root,0)
    return res
};