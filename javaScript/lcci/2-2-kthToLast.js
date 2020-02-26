/**
 * https://leetcode-cn.com/problems/kth-node-from-end-of-list-lcci/
 * 面试题 02.02. 返回倒数第 k 个节点
 * Medium
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 */
var kthToLast = function(head, k) {
    let node = head
    let t = head
    for(let i=0;i<k;i++) {
        t = t.next
    }
    while(t) {
        t = t.next
        node = node.next
    }
    return node.val
};