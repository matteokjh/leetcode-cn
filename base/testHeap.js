const minHeap = require('./minHeap')
const maxHeap = require('./maxHeap')

function testMinHeap() {
    let heap = new minHeap();
    let arr = [2, 10, 3, 1, 5, 8]
    for (let num of arr) {
        heap.insert(num);
    }
    while (heap.top()) {
        heap.remove()
        console.log(heap)
    }
}
function testMaxHeap() {
    let heap = new maxHeap();
    let arr = [2, 10, 3, 1, 5, 8]
    for (let num of arr) {
        heap.insert(num);
    }
    while (heap.top()) {
        heap.remove()
        console.log(heap)
    }
}
// testMinHeap()
// testMaxHeap()
