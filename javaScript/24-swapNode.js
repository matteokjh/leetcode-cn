/**
 * https://leetcode-cn.com/problems/swap-nodes-in-pairs/
 * 两两交换链表中的节点
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
function ListNode(val) {
    function func(v) {
        if (v.length == 0) {
            return null;
        }
        let a = {};
        let k = v.shift();
        a.val = k;
        a.next = func(v);
        return a;
    }
    if (Array.isArray(val)) {
        return func(val);
    } else {
        return {
            val: val,
            next: null
        }
    }
}

var swapPairs = function(head) {
    //递归解法
    if(head == null || head.next == null){
        return head;
    }
    let next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;
    return next;

    //迭代解法 -- 三指针
    // if(head == null || head.next == null){
    //     return head;
    // }
    // let res = ListNode();
    // res.next = head.next;
    // let pre = res;
    // let cur = head;
    // while(cur != null && cur.next !=null){
    //     let temp = cur.next.next;
    //     pre.next = cur.next;
    //     cur.next.next = cur;
    //     cur.next = temp;
    //     pre = pre.next.next;
    //     cur = temp;
    // }
    // return res.next;
};
let a = new ListNode([1,2,3,4]);
let res = swapPairs(a);
console.log(res);