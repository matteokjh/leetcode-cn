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

function testHeap() {
    let heap = new Heap();
    let arr = [2, 10, 3, 1, 5, 8]
    for (let num of arr) {
        heap.insert(num);
    }
    while (heap.getMin()) {
        heap.remove()
        console.log(heap)
    }
}
// testHeap()
