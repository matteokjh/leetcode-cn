/**
 * https://leetcode-cn.com/problems/list-of-depth-lcci/
 * 面试题 04.03. 特定深度节点链表
 * Medium
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function(tree) {
    let res = []
    let queue = [tree]
    while(queue.length) {
        let len = queue.length
        let r = new ListNode(-1)
        let n = r
        for(let i=0;i<len;i++) {
            let q = queue.shift()
            n.next = new ListNode(q.val)
            n = n.next
            if(q.left) queue.push(q.left)
            if(q.right) queue.push(q.right)
        }
        res.push(r.next)
    }
    return res
};