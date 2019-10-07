/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * https://leetcode-cn.com/problems/validate-binary-search-tree/
 * 验证二叉搜索树
 * Medium
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let cur = root
    let list = []
    let res = true
    function func(node) {
        if(!node) {
            return
        }
        func(node.left)
        if(node.val <= list[list.length-1]) {
            res = false
        }
        list.push(node.val)
        func(node.right)
    }
    func(cur)
    return res
};