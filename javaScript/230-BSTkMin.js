/**
 * https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst
 * 二叉搜索树中第K小的元素
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // 中序遍历
    let min = []
    function func(root){
        if(root.left){
            func(root.left)
        }
        min.push(root.val)
        if(root.right){
            func(root.right)
        }
        if(min[k-1]!==null){
            return
        }
    }
    func(root)
    return min[k-1]
};