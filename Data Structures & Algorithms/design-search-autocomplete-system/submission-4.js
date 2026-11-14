class AutocompleteSystem {
    /**
     * @param {string[]} sentences
     * @param {number[]} times
     */
    constructor(sentences, times) {
        this.set = new Set(sentences);
        this.sen = sentences.map((item, idx) => ({ value: item, times: times[idx] }));
        this.times = times;
        this.curr = "";
    }

    /**
     * @param {character} c
     * @return {string[]}
     */
    input(c) {
        if (c === "#") {
            if (this.set.has(this.curr)) {
                const idx = this.sen.findIndex((item) => item.value === this.curr);
                this.sen[idx].times += 1;
            } else {
                this.sen.push({ value: this.curr, times: 1 });
                this.set.add(this.curr);
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
        //after reading c = '#'
        //clean up state and input the currently searched sentence
        //return emtpy array for c = '#'
    }
}

/**
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */
