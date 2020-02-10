/**
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
 * k个一组反转链表
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
var reverseKGroup = function(head, k) {
    let pre,cur=head,next;
    let count = 0;
    let len = 0;
    let check = head;
    while(len < k && check != null){ // 先判断满不满足条件
        check = check.next;
        len++;
    }
    if(len == k){ // 满足条件
        while(count < k && cur != null){ // 跟C语言的链表指针反转一样...
            next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
            count++;
        }
        if(next != null){
            head.next = reverseKGroup(next,k);
        }
        // pre是新头节点
        return pre;
    }else{
        return head;
    }
};

let a = new ListNode([1,2,3,4,5]);
let res = reverseKGroup(a,3);
console.log(res);