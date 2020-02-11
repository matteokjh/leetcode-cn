/**
 * https://leetcode-cn.com/problems/sort-list/
 * 链表排序
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
function merge(l,r){
    let header = {};
    let cur = header;
    while(l&&r){
        if(l.val <= r.val){
            cur.next = l;
            cur = cur.next
            l = l.next
        }else{
            cur.next = r;
            cur = cur.next;
            r = r.next
        }
    }
    if(l){
        cur.next = l
    }
    if(r){
        cur.next = r
    }
    return header.next
}
function mergeSort(head){
    if(!head.next){
        return head
    }
    let p = head,q = head,pre;
    while(q && q.next){
        pre = p
        p = p.next;
        q = q.next.next
    }
    pre.next = null;
    let l = mergeSort(head);
    let r = mergeSort(p)
    return merge(l,r)
}
var sortList = function(head) {
    // 个人方法，不符合题目O(nlogn)和O(1)的要求
    // let res = []
    // if(!head) return null
    // while(head){
    //     res.push(head.val)
    //     head = head.next
    // }
    // res.sort((a,b)=>a-b)
    // let ret = {}
    // let a
    // while(res.length > 0){
    //     if(!a){
    //         ret = new ListNode(res.shift());
    //         a = ret
    //     }else{
    //         a.next = new ListNode(res.shift());
    //         a = a.next
    //     }
    // }
    // return ret
    
    // 根据评论，用归并
    return head ? mergeSort(head) : null
    
    
    
};