// 构造单链表
class ListNode {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
class LinkedList {
    constructor(){
        this._head = null;
        this._length = 0;
        this._tail = null;
    }
    init(arr){
        while(arr && arr.length > 0){
            this.insert(arr.shift())
        }
    }
    insert(val){
        if(val == undefined){
            return
        }else{
            let node = new ListNode(val)
            if(!this._head){
                this._head = node;
                this._tail = this._head;
                this._length++;
            }else{
                this._tail.next = node;
                this._tail = this._tail.next
                this._length++;
            }
        }
    }
    show(){
        let a = this._head;
        while(a){
            console.log(a)
            a = a.next;
        }
    }
}

module.exports = {
    ListNode,LinkedList
}