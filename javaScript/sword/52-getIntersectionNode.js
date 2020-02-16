/**
 * https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/
 * 面试题52. 两个链表的第一个公共节点
 * Easy
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let h1 = headA
    let h2 = headB
    while(h1 !== h2) {
        h1 = h1 === null ? headB : h1.next
        h2 = h2 === null ? headA : h2.next
    }
    return h2
};