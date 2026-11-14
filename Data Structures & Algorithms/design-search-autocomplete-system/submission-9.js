class AutocompleteSystem {
    /**
     * @param {string[]} sentences
     * @param {number[]} times
     */
    constructor(sentences, times) {
        this.map = {};
        this.sen = sentences.map((item, idx) => {
            this.map[item] = idx;
            return { value: item, times: times[idx] };
        });
        this.curr = "";
    }

    /**
     * @param {character} c
     * @return {string[]}
     */
    input(c) {
        if (c === "#") {
            if (this.curr in this.map) {
                const idx = this.map[this.curr];
                this.sen[idx].times += 1;
            } else {
                this.sen.push({ value: this.curr, times: 1 });
                this.map[this.curr] = this.sen.length - 1;
            }
            this.curr = "";
            return [];
        }
        this.curr = this.curr.concat(c);
        const ans = this.sen
            .filter((item) => item.value.startsWith(this.curr))
            .sort((a, b) => {
                if (a.times !== b.times) {
                    return b.times - a.times;
                }
                if (a.value < b.value) return -1;
                if (a.value > b.value) return 1;
                return 0;
            })
            .slice(0, 3)
            .map((item) => item.value);
        return ans;
    }
}

/**
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */
