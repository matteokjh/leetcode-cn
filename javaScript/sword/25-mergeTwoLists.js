/**
 * https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
 * 面试题25	合并两个排序的链表
 * Easy
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
var mergeTwoLists = function(l1, l2) {
    if(!l1 || !l2) return l1 ? l1 : l2
    let a = l1
    let b = l2
    let res = l1
    if(a.val > b.val) {
        let c = a
        a = b
        b = c
        res = l2
    }
    while(a && b) {
        while(a.next && a.next.val < b.val) {
            a = a.next
        }
        let tmp = a.next
        let rec = b.next
        a.next = b
        a.next.next = tmp
        a = a.next
        b = rec
    }
    return res
};