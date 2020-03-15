/**
 * https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/
 * 5357. 设计一个支持增量操作的栈
 * Medium
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.val = []
    this.maxSize = maxSize
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if(this.val.length < this.maxSize) {
        this.val.push(x)
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    return this.val.length ? this.val.pop() : -1
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    for(let i=0;i<Math.min(k, this.val.length);i++) {
        this.val[i] += val
    }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */