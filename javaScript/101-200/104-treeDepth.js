/**
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
 * 二叉树最大深度
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
var maxDepth = function(root) {
    let depth = 0;
    if(!root){
        return 0
    }
    function func(a,ret){
        ret++;
        depth = ret > depth ? ret: depth;
        if(a.left){
            func(a.left,ret)
        }
        if(a.right){
            func(a.right,ret)
        }
    }
    func(root,0)
    return depth
};