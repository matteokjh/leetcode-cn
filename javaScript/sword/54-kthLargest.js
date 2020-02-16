/**
 * https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/
 * 面试题54	二叉搜索树的第k大节点
 * Easy
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    let res
    let t = 0
    function traversal(node) {
        if(!node) return
        traversal(node.right)
        if(++t === k) res = node.val
        traversal(node.left)
    }
    traversal(root)
    return res
};