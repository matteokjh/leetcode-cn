/**
 * https://leetcode-cn.com/problems/palindrome-linked-list/
 * 回文链表
 * Easy
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head || !head.next) {
        return true
    }
    let slow = head
    let fast = head
    let pre = null
    let cur = head
    while(fast !== null && fast.next !== null) {
        cur = slow
        fast = fast.next.next
        slow = slow.next
        cur.next = pre
        pre = cur
    }
    if(fast !== null) {
        slow = slow.next
    }
    while(slow !== null && cur !== null) {
        if(slow.val !== cur.val) {
            return false
        }
        slow = slow.next
        cur = cur.next
    }
    return true
};