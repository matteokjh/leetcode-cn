/**
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
 * k个一组反转链表
 * Hard
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let stack = []
    let res = new ListNode(0)
    let cur = res
    let count
    while (1) {
        node = head
        count = k
        for (let i = 0; i < k; i++) {
            if (!node) break
            stack.push(node)
            node = node.next
            count--
        }
        if(count) {
            cur.next = head
            break
        }
        while (stack.length) {
            cur.next = stack.pop()
            cur = cur.next
        }
        cur.next = node
        head = node
    }
    return res.next
};