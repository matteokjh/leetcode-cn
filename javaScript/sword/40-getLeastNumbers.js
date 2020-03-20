/**
 * https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/
 * 面试题40. 最小的k个数
 * Easy
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// class maxHeap {
//     constructor() {
//         this.heap = [null];
//     }
//     get value() {
//         return this.heap.slice(1)
//     }
//     get size() {
//         return this.heap.length - 1;
//     }
//     top() {
//         return this.heap[1];
//     }
//     insert(val) {
//         this.heap.push(val);
//         if (this.heap.length > 1) {
//             let parent = this.heap.length - 1;
//             let child = ~~(parent / 2);
//             // traverse
//             while (parent > 1 && this.heap[child] < this.heap[parent]) {
//                 [this.heap[child], this.heap[parent]] = [
//                     this.heap[parent],
//                     this.heap[child]
//                 ];
//                 parent = child;
//                 child = ~~(child / 2);
//             }
//         }
//     }
//     remove() {
//         if (this.heap.length <= 1) return -1;
//         let min = this.heap[1];
//         let tmp = this.heap[this.heap.length - 1];
//         this.heap[1] = tmp
//         this.heap.splice(this.heap.length-1);
//         let len = this.heap.length;
//         let parent = 1, child = 2;
//         while(child < len) {
//             if (child + 1 < len && this.heap[child + 1] > this.heap[child]) {
//                 child++;
//             }
//             if (tmp > this.heap[child]) break;
//             [this.heap[parent], this.heap[child]] = [this.heap[child], this.heap[parent]];
//             parent = child
//             child = parent * 2
//         }
//         return min;
//     }
// }
var getLeastNumbers = function(arr, k) {
    // 排序
    // return arr.sort((a,b)=>a-b).slice(0,k)
    // ==========================================
    // 大根堆
    // let heap = new maxHeap()
    // for(let i=0;i<k;i++) {
    //     heap.insert(arr[i])
    // }
    // for(let i=k;i<arr.length;i++) {
    //     if(arr[i] < heap.top()) {
    //         heap.remove()
    //         heap.insert(arr[i])
    //     }
    // }
    // return heap.value
    // ==========================================\
    // 快排思想
    let left = 0
    let right = arr.length-1
    while(left < right) {
        let i = partition(left, right)
        if(i <= k) {
            left = i+1
        }
        if(i >= k){
            right = i-1
        }
    }
    function partition(left, right) {
        let pivot = arr[left]
        while(left < right) {
            while(left < right && arr[right] >= pivot) {
                right--
            }
            arr[left] = arr[right]
            while(left < right && arr[left] <= pivot) {
                left++
            }
            arr[right] = arr[left]
        }
        arr[left] = pivot
        return left
    }
    return arr.slice(0, k)
};