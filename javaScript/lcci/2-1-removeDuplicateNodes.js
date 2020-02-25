/**
 * https://leetcode-cn.com/problems/remove-duplicate-node-lcci/
 * 面试题 02.01. 移除重复节点
 * Easy
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function(head) {
    let node = head
    let m = {}
    while(node) {
        if(!node.next) break
        m[node.val] = 1
        while(node.next && m[node.next.val]) {
            node.next = node.next.next
        }
        node = node.next
    }
    return head
};