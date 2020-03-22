/** https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * @description: 合并两个有序链表
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    // let i = l1,j = l2
    // let res = new ListNode(-1)
    // let node = res
    // while(i && j) {
    //     if(i.val > j.val) [i, j] = [j, i]
    //     node.next = i
    //     i = i.next
    //     node = node.next
    // }
    // node.next = i ? i : j
    // return res.next

    // 递归
    if (!l1) return l2;
    if (!l2) return l1;
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
