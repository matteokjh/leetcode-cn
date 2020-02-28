/**
 * https://leetcode-cn.com/problems/triple-in-one-lcci/
 * 面试题 03.01. 三合一
 * Medium
 * @param {number} stackSize
 */
var TripleInOne = function(stackSize) {
    this.stack = [...new Array(3)].map(()=>Array())
    this.stackSize = stackSize
};

/** 
 * @param {number} stackNum 
 * @param {number} value
 * @return {void}
 */
TripleInOne.prototype.push = function(stackNum, value) {
    if(this.stack[stackNum].length < this.stackSize) {
        this.stack[stackNum].push(value)
    }
};

/** 
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.pop = function(stackNum) {
    return this.stack[stackNum].length ? this.stack[stackNum].pop() : -1
};

/** 
 * @param {number} stackNum
 * @return {number}
 */
TripleInOne.prototype.peek = function(stackNum) {
    return this.stack[stackNum].length ? this.stack[stackNum][this.stack[stackNum].length-1] : -1
};

/** 
 * @param {number} stackNum
 * @return {boolean}
 */
TripleInOne.prototype.isEmpty = function(stackNum) {
    return this.stack[stackNum].length === 0
};

/**
 * Your TripleInOne object will be instantiated and called as such:
 * var obj = new TripleInOne(stackSize)
 * obj.push(stackNum,value)
 * var param_2 = obj.pop(stackNum)
 * var param_3 = obj.peek(stackNum)
 * var param_4 = obj.isEmpty(stackNum)
 */