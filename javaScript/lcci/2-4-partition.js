/**
 * https://leetcode-cn.com/problems/partition-list-lcci/
 * 面试题 02.04. 分割链表
 * Medium
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let l1 = new ListNode(-1)
    let l2 = new ListNode(-1)
    let node = head
    let right = l2
    let left = l1
    while(node) {
        if(node.val >= x) {
            right.next = new ListNode(node.val)
            right = right.next
        } else {
            left.next = new ListNode(node.val)
            left = left.next
        }
        node = node.next
    }
    left.next = l2.next
    return l1.next
};