/**
 * https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
 * 面试题24	反转链表
 * Easy
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
var reverseList = function(head) {
    let node = head
    let pre = null
    while(node) {
        let cur = node
        node = cur.next
        cur.next = pre
        pre = cur
    }
    return pre
};