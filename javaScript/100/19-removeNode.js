/**
 * https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * 删除倒数第n个节点
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let c = head;
    let cur = head;
    while(n > 0){
        cur = cur.next;
        n--;
    }
    if(cur == null){
        return head.next; // 排除[1] 1的情况
    }
    while(cur.next){
        cur = cur.next;
        c = c.next;
    }
    c.next = c.next.next;
    return head;
};