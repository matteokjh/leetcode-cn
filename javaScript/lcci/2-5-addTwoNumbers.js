/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * https://leetcode-cn.com/problems/sum-lists-lcci/
 * 面试题 02.05. 链表求和
 * Medium
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // function reverse(root) {
    //     let cur = root
    //     let pre = null
    //     while(cur) {
    //         let tmp = cur.next
    //         cur.next = pre
    //         pre = cur
    //         cur = tmp
    //     }
    //     return pre
    // }
    // l1 = reverse(l1)
    // l2 = reverse(l2)
    let cin = 0
    let res = new ListNode(0)
    let r = res
    let x, y
    while (l1 || l2) {
        x = l1 ? l1.val : 0
        y = l2 ? l2.val : 0
        s = x + y + cin
        cin = s >= 10 ? 1 : 0
        r.next = new ListNode(s % 10)
        r = r.next
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    if (cin) r.next = new ListNode(1)
    return res.next
};