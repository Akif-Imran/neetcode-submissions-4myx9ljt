class Trie {
    constructor() {
        this.children = new Map();
        this.count = 0;
    }
    insert(word) {
        let curr = this;
        for (const c of word) {
            if (!curr.children.has(c)) {
                curr.children.set(c, new Trie());
            }
            curr = curr.children.get(c);
            curr.count += 1;
        }
    }

    countPrefix(pref) {
        let curr = this;
        let count = 0;

        for (const c of pref) {
            if (!curr.children.has(c)) {
                return 0;
            }
            curr = curr.children.get(c);
            count = curr.count;
        }
        return count;
    }
}
class Solution {
    /**
     * @param {string[]} words
     * @param {string} pref
     * @return {number}
     */
    prefixCount(words, pref) {
        const trie = new Trie();
        for (const word of words) {
            trie.insert(word);
        }
        return trie.countPrefix(pref);
    }
}
