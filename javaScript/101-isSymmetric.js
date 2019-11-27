/**
 * https://leetcode-cn.com/problems/symmetric-tree/
 * 对称二叉树
 * Easy
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
var isSymmetric = function(root) {
    // recursive
    // function func(left,right) {
    //     if(left == null && right == null) {
    //         return true
    //     }
    //     if(left == null || right == null) {
    //         return false
    //     }
    //     return left.val === right.val && func(left.right,right.left) && func(left.left,right.right)
    // }
    // return func(root,root)
    
    // iteration
    let arr = [root,root]
    let t1,t2
    while(arr.length) {
        t1 = arr.pop()
        t2 = arr.pop()
        if(t1 == null && t2 == null) {
            continue
        }
        if(t1 == null || t2 == null || t1.val !== t2.val) {
            return false
        }
        arr.push(t1.left,t2.right,t1.right,t2.left)
    }
    return true
};