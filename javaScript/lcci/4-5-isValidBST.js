/**
 * https://leetcode-cn.com/problems/legal-binary-search-tree-lcci/
 * 面试题 04.05. 合法二叉搜索树
 * Medium
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let res = true
    let pre = -Infinity
    function inorder(node) {
        if(!node || !res) return
        inorder(node.left)
        if(node.val <= pre){
            res = false
            return
        }
        pre = node.val
        inorder(node.right)
    }
    inorder(root)
    return res
};