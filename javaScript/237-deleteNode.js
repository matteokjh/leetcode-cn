/**
 * https://leetcode-cn.com/problems/delete-node-in-a-linked-list/submissions/
 * 删除链表结点
 * 这题是神仙题目...只给了要删除的结点，没有给头结点
 * 没法调试，只给出答案
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};