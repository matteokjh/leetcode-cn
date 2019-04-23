/**
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/
 * 区间翻转链表
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
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
var reverseBetween = function(head, m, n) {
    if(m == n){
        return head
    }
    let a = {};
    let b = {};
    let pre = null;
    let cur = head;
    let i = 1;
    while(i<m){
        a = cur; // 标记连接位1
        cur = cur.next;
        i++;
    }
    b = cur;
    while(i<n+1){
        let temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
        i++;
    }
    a.next ? a.next = pre : head = pre;
    b.next = cur;
    console.log(head)
};

let a = ListNode([1,2,3,4,5]);
let res = reverseBetween(a,3,4);
console.log(res)



