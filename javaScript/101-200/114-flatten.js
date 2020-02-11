/**
 * https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
 * 二叉树展开为链表
 * Medium
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    while(root) {
        if(root.left) {
            let pre = root.left
            while(pre.right) {
                pre = pre.right
            }
            pre.right = root.right
            root.right = root.left
            root.left = null
        }
        root = root.right
    }
};