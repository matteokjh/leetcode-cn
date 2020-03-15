/**
 * https://leetcode-cn.com/problems/maximum-performance-of-a-team/
 * 5359. 最大的团队表现值
 * Hard
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function(n, speed, efficiency, k) {
    let heap = new MyHeap()
    let MOD = BigInt(1e9 + 7)
    let arr = []
    for(let i=0;i<n;i++) {
        arr.push([BigInt(speed[i]), BigInt(efficiency[i])])
    }
    arr.sort((a,b) => b[1] - a[1])
    let sum = BigInt(0)
    let res = BigInt(0)
    for(let [spd, eff] of arr) {
        if(heap.size > k - 1) sum -= heap.poll()
        sum += spd
        heap.push(spd)
        let tmp = eff * sum
        res = res > tmp ? res : tmp
    }
    return res % MOD
};

class MyHeap {
    constructor() {
        this.val = []
    }
    get size() {
        return this.val.length
    }
    push(val) {
        let left = 0
        let right = this.val.length
        while(left < right) {
            let mid = left + ~~((right-left)/2)
            if(this.val[mid] < val) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        this.val.splice(left, 0, val)
    }
    poll() {
        return this.val.length ? this.val.shift() : -1
    }
}