/**
 * https://leetcode-cn.com/problems/maximum-performance-of-a-team/
 * 1383. 最大的团队表现值
 * Hard
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function(n, speed, efficiency, k) {
    let heap = new Heap()
    let MOD = BigInt(1e9 + 7)
    let arr = []
    for(let i=0;i<n;i++) {
        arr.push([speed[i], efficiency[i]])
    }
    arr.sort((a,b) => b[1] - a[1])
    let sum = BigInt(0)
    let res = BigInt(0)
    for(let [spd, eff] of arr) {
        if(heap.size > k-1) {
            sum -= BigInt(heap.remove())
        }
        sum += BigInt(spd)
        heap.insert(spd)
        let tmp = BigInt(eff) * sum
        res = res > tmp ? res : tmp
    }
    return res % MOD
};
class Heap {
    constructor() {
        this.heap = [null];
    }
    get size() {
        return this.heap.length - 1;
    }
    getMin() {
        return this.heap[1];
    }
    insert(val) {
        this.heap.push(val);
        if (this.heap.length > 1) {
            let parent = this.heap.length - 1;
            let child = ~~(parent / 2);
            // traverse
            while (parent > 1 && this.heap[child] > this.heap[parent]) {
                [this.heap[child], this.heap[parent]] = [
                    this.heap[parent],
                    this.heap[child]
                ];
                parent = child;
                child = ~~(child / 2);
            }
        }
    }
    remove() {
        if (this.heap.length <= 1) return -1;
        let min = this.heap[1];
        let tmp = this.heap[this.heap.length - 1];
        this.heap[1] = tmp
        this.heap.splice(this.heap.length-1);
        let len = this.heap.length;
        let parent = 1, child = 2;
        while(child < len) {
            if (child + 1 < len && this.heap[child + 1] < this.heap[child]) {
                child++;
            }
            if (tmp < this.heap[child]) break;
            [this.heap[parent], this.heap[child]] = [this.heap[child], this.heap[parent]];
            parent = child
            child = parent * 2
        }
        return min;
    }
}