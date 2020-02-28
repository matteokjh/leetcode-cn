/**
 * https://leetcode-cn.com/problems/linked-list-cycle-lcci/
 * 面试题 02.08. 环路检测
 * Medium
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if(!head || !head.next) {
        return null
    }
    let slow = head.next
    let fast = head.next.next
    while(slow && fast && fast.next && slow !== fast) {
        slow = slow.next
        fast = fast.next.next
    }
    let node = head
    while(node && slow && node !== slow) {
        node = node.next
        slow = slow.next
    }
    return slow
};