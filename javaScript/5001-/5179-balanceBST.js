/**
 * https://leetcode-cn.com/problems/balance-a-binary-search-tree/
 * 5179. 将二叉搜索树变平衡
 * Medium
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    if(!root) return null
    let arr = []
    function traversal(root) {
        if(!root) return null
        traversal(root.left)
        arr.push(root.val)
        traversal(root.right)
    }
    traversal(root)
    function func(left, right, res) {
        if(left >= right) return null
        let mid = left + ~~((right-left)/2)
        res = new TreeNode(arr[mid])
        res.left = func(left, mid)
        res.right = func(mid+1, right)
        return res
    }
    return func(0, arr.length, null)
};