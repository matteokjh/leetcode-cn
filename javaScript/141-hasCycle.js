/**
 * https://leetcode-cn.com/problems/linked-list-cycle/
 * 环形链表
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
var hasCycle = function(head) {
    // 标记法
    // if (head == null || head.next == null) {
    //     return false
    // }
    // head.state = 'abcd';
    // while(head.next){
    //     head = head.next;
    //     if(head.state == 'abcd'){
    //         return true
    //     }
    //     head.state = 'abcd'
    // }
    // return false
    
    // 快慢指针
    let slow=head,fast=head;
    while(head && head.next){
        if(!(fast.next && fast.next.next)){
            return false
        }
        slow = slow.next;  
        fast = fast.next.next;
        if(slow == fast) return true;
    }
    return false
};