class FreqStack {
    constructor() {
        this.stack = [];
        this.map = new Map();
        this.currMaxFreq = 0;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        this.map.set(val, (this.map.get(val) || 0) + 1);
        this.currMaxFreq = Math.max(this.currMaxFreq, this.map.get(val));
    }

    /**
     * @return {number}
     */
    pop() {
        //count freqency of every number
        //return the most frequent topmost element
        let res = 0;
        for (let i = this.stack.length - 1; i >= 0; i--) {
            if (this.map.get(this.stack[i]) === this.currMaxFreq) {
                res = this.stack[i];
                this.map.set(this.stack[i], this.map.get(this.stack[i]) - 1);
                this.stack.splice(i, 1);
                break;
            }
        }
        this.currMaxFreq = Math.max(...this.map.values());
        return res;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
