class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.keyStore.has(key)) {
            this.keyStore.set(key, []);
        }
        this.keyStore.get(key).push({ val: value, timestamp });
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.keyStore.has(key)) return "";

        const arr = this.keyStore.get(key);

        let l = 0;
        let r = arr.length - 1;
        let res = 0;

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            if (timestamp === arr[mid].timestamp) return arr[mid].val;
            else if (timestamp > arr[mid].timestamp) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }
        res = l;
        if (l >= arr.length) {
            res = arr.length - 1;
        }
        return arr[res].val;
    }
}
