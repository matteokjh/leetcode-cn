/**
 * https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
 * 相交链表
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
    let a = headA;
    let b = headB;
    while(a != b){ // 让a，b重新指向一次null很关键，避免两个链表连在一起。。。
        a = !a ? headB : a.next;
        b = !b ? headA : b.next;
    }
    return a
    
};