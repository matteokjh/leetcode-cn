/**
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/
 * 合并k个有序链表
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
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

var mergeKLists = function(lists) {
    let res = {};
    let a = [];
    lists.forEach(e => {
        while(e){
            a.push(e.val)
            e = e.next;
        }
    });
    a.sort((a,b)=>a-b);
    res = ListNode(a);
    return res
};

let arr = [
    ListNode([1,4,5]),
    ListNode([1,3,4]),
    ListNode([2,6])
]
let res = mergeKLists(arr);
console.log(res)