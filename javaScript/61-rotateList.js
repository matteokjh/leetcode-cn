/**
 * https://leetcode-cn.com/problems/rotate-list/
 * 旋转链表
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

// 构造单链表
let {ListNode,LinkedList} = require('../LinkedList') // 链表

// 旋转链表
var rotateRight = function(head, k) {
    if(!head){
        return null
    }else{
        // 先拿长度
        let a = head
        let length = 0;
        let pre = head; // 前半部分
        let next = head; // 后半部分
        while(a){
            length++;
            a = a.next;
        }
        let b = pre;
        for(let i=0;i<length-k%length-1;i++){
            b = b.next;
        }
        next = b.next;
        b.next = null;
        if(next){
            let c = next;
            while(c.next){
                c = c.next
            }
            c.next = pre;
            return next;
        }else{
            return head
        }
    }
};

let a = new LinkedList()
a.init([1,2,3,4,5])
// a.show();
let res = rotateRight(a._head,4)
console.log(res)