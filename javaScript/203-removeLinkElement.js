/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
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
var removeElements = function(head, val) {
    // 对链表的操作还是不太熟悉
    // 别人的实现：递归

    // if(!head) return head;
    // head.next = removeElements(head.next,val);
    // return head.val == val ? head.next : head

    // 非递归 -- 虚拟头结点
    let header = {};
    header.next = head;
    let cur = header;
    while(cur.next!=null){
        if(cur.next.val == val){
            cur.next = cur.next.next
        }else{
            cur = cur.next;
        }
    }
    return header.next
};

let a = ListNode([1,2,3,4,6,5,6,6,32]);

let res = removeElements(a,6);
console.log(res);