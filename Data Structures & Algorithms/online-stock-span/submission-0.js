class StockSpanner {
    constructor() {
        this.res = [];
    }

    /**
     * @param {number} price
     * @return {number}
     */
    next(price) {
        let span = 1;
        while (this.res.length > 0 && this.res[this.res.length - 1][0] <= price) {
            span += this.res[this.res.length - 1][1];
            this.res.pop();
        }
        this.res.push([price, span]);
        return span;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
