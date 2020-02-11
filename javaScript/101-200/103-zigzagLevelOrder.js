/**
 * https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/
 * 二叉树的锯齿形层次遍历
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
var zigzagLevelOrder = function(root) {
    let res = []
    
    function func(root,depth) {
        if(!root) return
        if(!res[depth]) res[depth] = []
        depth % 2 ? res[depth].unshift(root.val) : res[depth].push(root.val)
        func(root.left,depth+1)
        func(root.right,depth+1)
    }
    func(root,0)
    return res
};