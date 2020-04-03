/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
 * 反转链表
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
    // 迭代
    // let pre = null
    // let cur = head
    // let tmp
    // while(cur) {
    //     tmp = cur.next
    //     cur.next = pre
    //     pre = cur
    //     cur = tmp
    // }
    // return pre

    // 递归
    if (!head || !head.next) return head;
    let node = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return node;
};
