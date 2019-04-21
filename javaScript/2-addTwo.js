/**
 * https://leetcode-cn.com/problems/add-two-numbers/submissions/
 * 两数相加
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(a,b) {
    let c = {};
    let res = {};
    let d = {};
    let sum = 0;
    function func(d,cin){
        if(a && b){
            sum = a.val + b.val + cin;
            if(sum >= 10){
                sum -= 10;
                cin = 1;
            }else{
                cin = 0;
            }
            a = a.next;
            b = b.next;
        }else if(a){
            sum = a.val + cin;
            if(sum >= 10){
                sum -= 10;
                cin = 1;
            }else{
                cin = 0;
            }
            a = a.next;
        }else if(b){
            sum = b.val + cin;
            if(sum >= 10){
                sum -= 10;
                cin = 1;
            }else{
                cin = 0;
            }
            b = b.next;
        }else if(cin) {
            sum = 1;
            cin = 0;
        }else{
            return;
        }
        c = new ListNode(sum);
        if(d.val == undefined){
            res = c;
            d = res;
        }else{
            d.next = c;
            d = d.next;
        }
        func(d,cin);
    }
    func(d,0);
    return res;
}