/**
 * https://leetcode-cn.com/problems/palindrome-linked-list-lcci/
 * 面试题 02.06. 回文链表
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
    if(!head || !head.next) return true
    let pre = head
    let slow = head.next
    let fast = head.next.next
    while(fast && fast.next) {
        pre = slow
        slow = slow.next
        fast = fast.next.next
    }
    if(pre) {
        pre.next = null
    }
    pre = null
    while(slow) {
        let tmp = slow.next
        slow.next = pre
        pre = slow
        slow = tmp
    }
    while(pre && head) {
        if(pre.val !== head.val) return false
        pre = pre.next
        head = head.next
    }
    return true
};