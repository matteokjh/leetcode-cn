/**
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree
 * BT最近公共组先
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
    if(!root){
        return root
    }
    if(root == p || root == q){
        return root
    }
    let left = lowestCommonAncestor(root.left,p,q);
    let right = lowestCommonAncestor(root.right,p,q);
    if(left && right){
        return root
    }else if(left){
        return left
    }else{
        return right
    }
    return null
    
};