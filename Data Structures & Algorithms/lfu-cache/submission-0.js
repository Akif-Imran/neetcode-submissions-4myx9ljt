class Node {
    constructor(key, value, prev = null, next = null) {
        this.prev = null;
        this.key = key;
        this.value = value;
        this.next = null;
    }
}
class List {
    constructor() {
        this.head = new Node(-1, -1);
        this.tail = new Node(-1, -1);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get_head() {
        return this.head;
    }

    insert(node) {
        if (node === this.head || node === this.tail) return;
        const prev = this.tail.prev;
        prev.next = node;
        node.prev = prev;
        node.next = this.tail;
        this.tail.prev = node;
    }
    remove(node) {
        if (node === this.head || node === this.tail) return;
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        next.prev = prev;
    }
}
class LFUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = new Map();
        this.freq = new Map();
        this.list = new List();
        this.cap = capacity;
        this.lf = 1;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (!this.cache.has(key)) return -1;

        const curr = this.cache.get(key);
        const counter_rec = this.freq.get(curr.counter);
        counter_rec.counter_map.delete(key);
        counter_rec.counter_list.remove(curr.node);

        if (!this.freq.has(curr.counter + 1)) {
            this.freq.set(curr.counter + 1, {
                counter_map: new Map(),
                counter_list: new List(),
            });
        }
        const next_counter_rec = this.freq.get(curr.counter + 1);
        next_counter_rec.counter_list.insert(curr.node);
        next_counter_rec.counter_map.set(key, curr.node);
        this.cache.set(key, { node: curr.node, counter: curr.counter + 1 });

        this.double_check_lf_pointer();
        return curr.node.value;
    }

    /**
     * @param {number} key
     * @param {number} value
     */
    put(key, value) {
        let node = new Node(key, value);
        if (this.cache.has(key)) {
            const curr = this.cache.get(key);
            this.cache.set(key, { counter: curr.counter + 1, node });
            const counter_rec = this.freq.get(curr.counter);
            counter_rec.counter_list.remove(counter_rec.counter_map.get(key));
            counter_rec.counter_map.delete(key);
            if (!this.freq.has(curr.counter + 1)) {
                this.freq.set(curr.counter + 1, {
                    counter_map: new Map(),
                    counter_list: new List(),
                });
            }
            this.freq.get(curr.counter + 1).counter_map.set(key, node);
            this.freq.get(curr.counter + 1).counter_list.insert(node);
            this.double_check_lf_pointer();
            return;
        }
        if (this.cache.size >= this.cap) {
            const lfu_rec = this.freq.get(this.lf);
            const list_node = lfu_rec.counter_list.get_head().next;
            lfu_rec.counter_map.delete(list_node.key);
            lfu_rec.counter_list.remove(list_node);
            this.cache.delete(list_node.key);
        }

        const curr = { counter: 1, node };
        this.cache.set(key, curr);
        if (!this.freq.has(curr.counter)) {
            this.freq.set(curr.counter, {
                counter_map: new Map(),
                counter_list: new List(),
            });
        }
        const counter_rec = this.freq.get(curr.counter);
        counter_rec.counter_list.insert(node);
        counter_rec.counter_map.set(key, node);
        this.lf = curr.counter;

        this.double_check_lf_pointer();
    }

    double_check_lf_pointer() {
        if (this.freq.get(this.lf).counter_map.size > 0) return;
        const max = this.freq.size;
        this.lf = 1;
        while (this.freq.get(this.lf).counter_map.size === 0 && this.lf <= max) {
            this.lf += 1;
        }
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
