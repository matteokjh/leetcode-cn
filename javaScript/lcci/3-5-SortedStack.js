// https://leetcode-cn.com/problems/sort-of-stacks-lcci/
// 面试题 03.05. 栈排序
// Medium

var SortedStack = function() {
    this.stack = []
    this.helper = []
};

/** 
 * @param {number} val
 * @return {void}
 */
SortedStack.prototype.push = function(val) {
    while(this.stack.length && val > this.stack[this.stack.length-1]) {
        this.helper.push(this.stack.pop())
    }
    this.stack.push(val)
    while(this.helper.length) {
        this.stack.push(this.helper.pop())
    }
};

/**
 * @return {void}
 */
SortedStack.prototype.pop = function() {
    this.stack.pop()
};

/**
 * @return {number}
 */
SortedStack.prototype.peek = function() {
    return this.stack[this.stack.length-1] || -1
};

/**
 * @return {boolean}
 */
SortedStack.prototype.isEmpty = function() {
    return this.stack.length === 0
};

/**
 * Your SortedStack object will be instantiated and called as such:
 * var obj = new SortedStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.isEmpty()
 */