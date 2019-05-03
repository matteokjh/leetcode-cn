/**
 * https://leetcode-cn.com/problems/linked-list-cycle-ii
 * 环形链表II
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

var detectCycle = function(head) {
    // 快慢指针判断是否有环
    if(!head || !head.next) return null
    let slow=head,fast=head;
    while(head && head.next){
        if(!(fast.next && fast.next.next)){
            return null
        }
        slow = slow.next;  
        fast = fast.next.next;
        if(slow == fast) {
         slow = head
            while(1){
                if(fast == slow){
                    return fast
                }
                fast = fast.next;
                slow = slow.next
            }   
        }
    }
    
    // 利用set
    // let s = new Set();
    // while(head && head.next){
    //     if(s.has(head)){
    //         return head
    //     }
    //     s.add(head)
    //     head = head.next
    // }
    // return null
    
           
    
    
    
};