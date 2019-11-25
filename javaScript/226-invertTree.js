/**
 * https://leetcode-cn.com/problems/invert-binary-tree/
 * 翻转二叉树
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
var invertTree = function(root) {
    let node = root
    function func(a) {
        if(!a) {
            return
        }
        let temp = a.left
        a.left = a.right
        a.right = temp
        func(a.left)
        func(a.right)
    }
    func(node)
    return node
};