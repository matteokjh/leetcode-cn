/**
 * https://leetcode-cn.com/problems/largest-bst-subtree/
 * 333. 最大 BST 子树
 * Medium
 * 
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

 // O(n^2)
function isBST(root) {
    function traversal(root, min, max) {
        if (!root) return true;
        return (
            root.val > min &&
            root.val < max &&
            traversal(root.left, min, root.val) &&
            traversal(root.right, root.val, max)
        );
    }
    return traversal(root, -Infinity, Infinity);
}
function getCnt(root) {
    if (!root) return 0;
    return 1 + getCnt(root.left) + getCnt(root.right);
}
var largestBSTSubtree = function (root) {
    if (!root) return 0;
    if (isBST(root)) return getCnt(root);
    let L = largestBSTSubtree(root.left);
    let R = largestBSTSubtree(root.right);
    return Math.max(L, R);
};

// O(n)
var largestBSTSubtree = function (root) {
    function helper(node) {
        if(!node) return [Infinity, -Infinity, 0]
        let [l_min, l_max, lv] = helper(node.left)
        let [r_min, r_max, rv] = helper(node.right)
        if(node.val > l_max && node.val < r_min) {
            return [Math.min(l_min, node.val), Math.max(r_max, node.val), lv + rv + 1]
        } else {
            return [-Infinity, Infinity, Math.max(lv, rv)]
        }
    }
    return helper(root)[2]
};