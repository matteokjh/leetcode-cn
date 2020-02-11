/**
 * https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/
 * 二叉树中最大路径和
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
var maxPathSum = function(root) {
    // 评论方法
    let res = -Infinity
    function func(r){
        if(!r){
            return 0
        }
        let left = Math.max(0,func(r.left));
        let right = Math.max(0,func(r.right));
        res = Math.max(res,r.val+left+right);
        return Math.max(left,right) + r.val
    }
    func(root)
    return res
};