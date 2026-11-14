class AutocompleteSystem {
    /**
     * @param {string[]} sentences
     * @param {number[]} times
     */
    constructor(sentences, times) {
        this.sen = sentences;
        this.set = new Set(sentences);
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
                const idx = this.sen.findIndex((val) => val === this.curr);
                this.times[idx] += 1;
            } else {
                this.sen.push(this.curr);
                this.times.push(1);
                this.set.add(this.curr);
            }
            return [];
        }
        this.curr.concat(c);
        console.log("curr: ", this.curr);
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
