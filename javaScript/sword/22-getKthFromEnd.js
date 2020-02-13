/**
 * https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 * 面试题22. 链表中倒数第k个节点
 * Easy
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    // 递归
    // let cnt = 1
    // function func(node) {
    //     if(!node || !node.next) return node
    //     let newNode = func(node.next)
    //     if(cnt === k) return newNode
    //     else cnt++
    //     return node
    // }

    // return func(head)

    // 快慢指针
    let slow = head
    let fast = head
    while(k) {
        fast = fast.next
        k--
    }
    while(fast) {
        slow = slow.next
        fast = fast.next
    }
    return slow
};