/**
 * https://leetcode-cn.com/problems/all-elements-in-two-binary-search-trees/
 * 两棵二叉搜索树中的所有元素
 * Medium
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function(root1, root2) {
    let a = []
    let b = []
    let res = []
    function inorder(root,arr) {
        if(!root) return
        inorder(root.left, arr)
        arr.push(root.val)
        inorder(root.right, arr)
    }
    inorder(root1, a)
    inorder(root2, b)
    while(a.length && b.length) {
        res.push(a[0] < b[0] ? a.shift() : b.shift())
    }
    res.push(...a, ...b)
    return res
};