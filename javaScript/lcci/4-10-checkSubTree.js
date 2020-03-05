/**
 * https://leetcode-cn.com/problems/check-subtree-lcci/
 * 面试题 04.10. 检查子树
 * Medium
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {boolean}
 */
function helper(p,q) {
    if(!q) return true
    if(!p) return false
    return p.val === q.val && helper(p.left, q.left) && helper(p.right, q.right)
}
var checkSubTree = function(t1, t2) {
    if(t1 && t2) {
        return helper(t1,t2) || checkSubTree(t1.left, t2) || checkSubTree(t1.right, t2)
    }
    return false
};