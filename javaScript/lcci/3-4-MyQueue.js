/**
 * https://leetcode-cn.com/problems/implement-queue-using-stacks-lcci/
 * 面试题 03.04. 化栈为队
 * Easy
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack = []
    this.helper = []
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    while(this.stack.length > 1) {
        this.helper.push(this.stack.pop())
    }
    let a = this.stack.pop()
    while(this.helper.length) {
        this.stack.push(this.helper.pop())
    }
    return a
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack[0]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length === 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */