/**
 * https://leetcode-cn.com/problems/linked-list-in-binary-tree/
 * 5346. 二叉树中的列表
 * Medium
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */

function dfs(head, root) {
    if(!head) return true
    if(!root) return false
    if(root.val !== head.val) return false
    return dfs(head.next, root.left) || dfs(head.next, root.right)
}
var isSubPath = function(head, root) {
    if(!head) return true
    if(!root) return false
    if(dfs(head, root)) return true
    return isSubPath(head, root.left) || isSubPath(head, root.right)
};