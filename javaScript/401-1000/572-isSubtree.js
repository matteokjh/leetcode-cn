/**
 * https://leetcode-cn.com/problems/subtree-of-another-tree/
 * 572. 另一个树的子树
 * Easy
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
function isSub(a, b) {
    if(!a && !b) return true
    if(!a || !b) return false
    return a.val === b.val && isSub(a.left, b.left) && isSub(a.right, b.right)
}
var isSubtree = function(s, t) {
    if(!t) return true
    if(!s) return false
    if(isSub(s, t)) return true
    return isSubtree(s.left, t) || isSubtree(s.right, t)
};