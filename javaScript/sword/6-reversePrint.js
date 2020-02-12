/**
 * https://leetcode-cn.com/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/
 * 面试题06 从尾到头打印链表 
 * Easy
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
    let node = head
    let res = []
    while(node) {
        res.unshift(node.val)
        node = node.next
    }
    return res
};