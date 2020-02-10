/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/submissions/
 * 二叉树中序遍历(非递归)
 * Medium
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let stack = []
    let cur = root
    let list = []
    while(cur || stack.length) {
        if(cur) {
            stack.push(cur)
            cur = cur.left
        } else {
            cur = stack.pop()
            list.push(cur.val)
            cur = cur.right
        }
    }
    return list
};