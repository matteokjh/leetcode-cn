/**
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * 从前序与中序遍历序列构造二叉树
 * Medium
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder || !inorder || !preorder.length || !inorder.length) {
        return null
    }
    let idx = 0
    let obj = {}
    inorder.forEach((e,idx)=>{
        obj[e] = idx
    })
    function func(start,end) {
        if(start > end) {
            return null
        }
        let val = preorder[idx]
        let node = new TreeNode(val)
        idx++
        let index = obj[val]
        node.left = func(start, index - 1)
        node.right = func(index + 1, end)
        return node
    }
    return func(0, preorder.length - 1)
};