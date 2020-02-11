/**
 * 最小栈
 * https://leetcode-cn.com/problems/min-stack
 * initialize your data structure here.
 */
var MinStack = function() {
    this.arr = []
    this.minStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.arr.push(x)
    if(this.minStack.length == 0 || x <= this.minStack[0]){
        this.minStack.unshift(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.arr.pop() == this.minStack[0]){
        this.minStack.shift()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[0]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */