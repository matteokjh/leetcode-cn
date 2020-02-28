/**
 * https://leetcode-cn.com/problems/min-stack-lcci/
 * 面试题 03.02. 栈的最小值
 * Easy
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
    this.mStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    if(!this.mStack.length) this.mStack.push(x)
    else if(x <= this.mStack[this.mStack.length-1]) {
        this.mStack.push(x)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let a = this.stack.pop()
    if(this.mStack[this.mStack.length-1] === a) {
        this.mStack.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.mStack[this.mStack.length-1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */