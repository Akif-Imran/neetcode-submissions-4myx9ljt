var ListNode = function (val, next, index) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.index = index === undefined ? null : index;
};
/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
class MyCircularQueue {
    /**
     * @param {number} k
     */
    constructor(k) {
        this.capacity = k;
        this.queue = new ListNode(-1, null, 0);

        this.curr_r = this.queue;
        this.curr_l = this.queue;
        this.size = 0;

        let curr = this.queue;
        for (let i = 1; i < k; i++) {
            curr.next = new ListNode(-1, null, i);
            curr = curr.next;
        }
        curr.next = this.queue;
    }

    /**
     * @param {number} value
     * @return {boolean}
     */
    enQueue(value) {
        if (this.size === this.capacity) return false;
        if (this.size === 0) {
            this.curr_l = this.curr_r;
        } else {
            this.curr_r = this.curr_r.next;
        }
        this.curr_r.val = value;
        this.size += 1;
        return true;
    }

    /**
     * @return {boolean}
     */
    deQueue() {
        if (this.size === 0) return false;
        this.curr_l = this.curr_l.next;
        this.size -= 1;
        return true;
    }

    /**
     * @return {number}
     */
    Front() {
        if (this.size === 0) return -1;
        return this.curr_l.val;
    }

    /**
     * @return {number}
     */
    Rear() {
        if (this.size === 0) return -1;
        return this.curr_r.val;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.size === 0;
    }

    /**
     * @return {boolean}
     */
    isFull() {
        return this.size === this.capacity;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
