class MinHeap {
    constructor() {
        this.heap = [0];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.heap.push(val);
        this._percolateUp(this.heap.length - 1);
    }

    /**
     * @return {number}
     */
    pop() {
        if (this.heap.length === 1) return -1;
        if (this.heap.length === 2) return this.heap.pop();
        let res = this.heap[1];
        this.heap[1] = this.heap.pop();
        this._percolateDown(1);
        return res;
    }

    /**
     * @return {number}
     */
    top() {
        if (this.heap.length === 1) return -1;
        return this.heap[1];
    }

    /**
     * @param {number[]} nums
     * @return {void}
     */
    heapify(nums) {
        this.heap = [0, ...nums];
        for (let i = Math.floor(this.heap.length - 1 / 2); i >= 1; i--) {
            this._percolateDown(i);
        }
    }

    _percolateUp(i) {
        while (i > 1) {
            const parent = Math.floor(i / 2);
            if (this.heap[i] >= this.heap[parent]) break;
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
        }
    }
    _percolateDown(i) {
        while (2 * i < this.heap.length) {
            let smallest = 2 * i;
            const right = 2 * i + 1;

            if (right < this.heap.length && this.heap[right] < this.heap[smallest])
                smallest = right;

            if (this.heap[i] < this.heap[smallest]) break;
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }
}
