// https://leetcode-cn.com/problems/dui-lie-de-zui-da-zhi-lcof/
// 面试题59 - II. 队列的最大值
// Medium

var MaxQueue = function() {
    this.queue = []
    this.maxValue = -Infinity
    this.maxIdx = -1
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
    if(!this.queue.length) return -1
    return this.maxValue
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
    this.queue.push(value)
    if(value >= this.maxValue) {
        this.maxIdx = this.queue.length-1
        this.maxValue = value
    }
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
    if(!this.queue.length) return -1
    let a = this.queue.shift()
    this.maxIdx--
    if(this.maxIdx < 0) {
        let tmp = -Infinity
        let id = -1
        for(let i=0;i<this.queue.length;i++) {
            if(this.queue[i] > tmp) {
                tmp = this.queue[i]
                id = i
            }
        }
        this.maxIdx = id
        this.maxValue = tmp
    }
    return a
};

/** 
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */