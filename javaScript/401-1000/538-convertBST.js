/**
 * https://leetcode-cn.com/problems/convert-bst-to-greater-tree/
 * 把二叉搜索树转换为累加树
 * Easy
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let sum = 0
    function func(root) {
        if(!root) return
        func(root.right)
        sum += root.val
        root.val = sum
        func(root.left)
    }
    func(root)
    return root
};