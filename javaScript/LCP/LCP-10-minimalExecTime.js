/**
 * https://leetcode-cn.com/problems/er-cha-shu-ren-wu-diao-du/
 * LCP 10. 二叉树任务调度
 * Hard
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function getSum(root) {
    if(!root) return 0
    return getSum(root.left) + getSum(root.right) + root.val
}
var minimalExecTime = function(root) {
    if(!root) return 0
    let left = minimalExecTime(root.left)
    let right = minimalExecTime(root.right)
    return Math.max(left, right, (getSum(root.left) + getSum(root.right)) / 2) + root.val
};