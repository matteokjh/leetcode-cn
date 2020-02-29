/**
 * https://leetcode-cn.com/problems/stack-of-plates-lcci/
 * 面试题 03.03. 堆盘子
 * Medium
 * @param {number} cap
 */
var StackOfPlates = function(cap) {
    this.stack = []
    this.maxSize = cap
    this.pos = 0
};

/** 
 * @param {number} val
 * @return {void}
 */
StackOfPlates.prototype.push = function(val) {
    if(!this.maxSize) return
    if(!this.stack[this.pos]) this.stack[this.pos] = []
    if(this.stack[this.pos].length === this.maxSize) {
        let a = [val]
        this.stack.push(a)
        this.pos++
    } else {
        this.stack[this.pos].push(val)
    }
};

/**
 * @return {number}
 */
StackOfPlates.prototype.pop = function() {
    if(!this.stack[this.pos] || !this.stack[this.pos].length) {
        return -1
    }
    let a = this.stack[this.pos].pop()
    if(this.stack[this.pos].length === 0 && this.pos > 0) {
        this.stack.splice(this.pos,1)
        this.pos--
    }
    return a
};

/** 
 * @param {number} index
 * @return {number}
 */
StackOfPlates.prototype.popAt = function(index) {
    if(!this.stack[index] || !this.stack[index].length) {
        return -1
    }
    let a = this.stack[index].pop()
    if(!this.stack[index].length) {
        this.stack.splice(index,1)
        if(this.pos > 0) {
            this.pos--
        }
    } else {

    }
    return a
};

/**
 * Your StackOfPlates object will be instantiated and called as such:
 * var obj = new StackOfPlates(cap)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAt(index)
 */