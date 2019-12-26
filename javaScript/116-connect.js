/**
 * https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
 * 填充每个节点的下一个右侧节点指针
 * Medium
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    function func(root) {
        if(!root || !root.left) {
            return
        }
        root.left.next = root.right
        if(root.next) {
            root.right.next = root.next.left
        }
        func(root.left)
        func(root.right)
    }
    func(root)
    return root
};