/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
 * 反转链表
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
var reverseList = function(head) {
    let pre = null;
    let cur = head;
    let temp = {};
    while(cur){
        temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
        
    }

    let e = pre;
    while(e){
        console.log(e.val);
        e = e.next;
    }
    return pre;
    
};

let a = ListNode([1,2,3,4,5]);
let res = reverseList(a);
console.log(res)