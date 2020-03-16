/**
 * https://leetcode-cn.com/problems/rank-from-stream-lcci/
 * 面试题 10.10. 数字流的秩
 * Medium
 */
var StreamRank = function() {
    this.val = []
};

/** 
 * @param {number} x
 * @return {void}
 */
StreamRank.prototype.track = function(x) {
    let right = this.val.length
    let left = 0
    while(left < right) {
        let mid = left + ~~((right-left)/2)
        if(this.val[mid] < x) {
            left = mid + 1
        } else right = mid
    }
    this.val.splice(left, 0, x)
};

/** 
 * @param {number} x
 * @return {number}
 */
StreamRank.prototype.getRankOfNumber = function(x) {
    if(!this.val.length) return 0
    let right = this.val.length
    let left = 0
    while(left < right) {
        let mid = left + ~~((right-left)/2)
        if(this.val[mid] < x) {
            left = mid + 1
        } else right = mid
    }
    while(this.val[left] === x) {
        left++
    }
    return left
};

/**
 * Your StreamRank object will be instantiated and called as such:
 * var obj = new StreamRank()
 * obj.track(x)
 * var param_2 = obj.getRankOfNumber(x)
 */