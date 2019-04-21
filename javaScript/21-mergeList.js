/** https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * @description: 合并两个有序链表
 * @param {ListNode} l1
 * @param {ListNode} l2
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

var mergeTwoLists = function (l1, l2) {
    if (l1 == null && l2 == null) {
        return []
    }
    let a = l1, b = l2;
    let res = {};
    let d = {};
    let c = {};
    while (a && b) {
        if (a.val > b.val) {
            c = ListNode(b.val);
            b = b.next;
        } else {
            c = ListNode(a.val);
            a = a.next;
        }
        if (res.val != undefined) {
            d.next = c;
            d = d.next;
        } else {
            res = c;
            d = res;
        }
    }
    while (a) {
        c = ListNode(a.val);
        if(d.val != undefined){
            d.next = c;
            d = d.next;
        }else{
            res = a;
            break;
        }
        a = a.next;
    }
    while (b) {
        c = ListNode(b.val);
        if(d.val != undefined){
            d.next = c;
            d = d.next;
        }else{
            res = b;
            break;
        }
        b = b.next;
    }

    let e = res;
    while (e) {
        console.log(e.val);
        e = e.next;
    }
    return res;
};

let a = ListNode([-6,-5,6,6,7])
let b = ListNode([0])

let res = mergeTwoLists(a, b);
console.log(res);