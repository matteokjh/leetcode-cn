/**
 * https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/
 * 面试题27. 二叉树的镜像
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
var mirrorTree = function(root) {
    function dfs(node) {
        if(!node) return null
        let left = dfs(node.left)
        let right = dfs(node.right)
        node.left = right
        node.right = left
        return node
    }
    return dfs(root)
};