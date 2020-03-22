/**
 * https://leetcode-cn.com/problems/add-two-numbers/submissions/
 * 两数相加
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(a,b) {
    let cin = 0
    let res = new ListNode(-1)
    let node = res
    let a,b,tmp
    while(l1 || l2) {
        a = l1 ? l1.val : 0
        b = l2 ? l2.val : 0
        tmp = a + b + cin
        cin = 0
        if(tmp >= 10) {
            tmp -= 10
            cin = 1
        }
        node.next = new ListNode(tmp)
        node = node.next
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
    }
    if(cin) {
        node.next = new ListNode(1)
    }
    return res.next
}