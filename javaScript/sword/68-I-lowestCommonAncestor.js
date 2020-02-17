/**
 * https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/
 * 面试题68 - I. 二叉搜索树的最近公共祖先
 * Easy
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // 递归
    if(!root) return null
    if(root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p,q)
    } else if(root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p,q)
    }
    return root
};