/**
 * https://leetcode-cn.com/problems/copy-list-with-random-pointer/
 * 复制带随机指针的链表
 * Medium
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    if(!head) return null
    let res = new Node(head.val,null,null)
    let a = head
    let b = res
    let isRead = new Map([[a,b]])
    function getNode(node) {
        if(!node) {
            return null
        }
        if(!isRead.get(node)) {
            isRead.set(node, new Node(node.val,null,null))
        }
        return isRead.get(node)
    }
    while(a) {
        b.random = getNode(a.random)
        b.next = getNode(a.next)
        a = a.next
        b = b.next
    }
    return res
};