/**
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal/
 * 二叉树层次遍历
 * Medium
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let res = []
    function func(root, depth) {
        if(!root) {
            return
        }
        if(!res[depth]) {
            res[depth] = []
        }
        res[depth].push(root.val)
        func(root.left,depth+1)
        func(root.right,depth+1)
    }
    func(root,0)
    return res
};