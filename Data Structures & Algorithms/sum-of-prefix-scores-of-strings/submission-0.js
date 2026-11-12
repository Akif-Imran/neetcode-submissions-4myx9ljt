class TrieNode {
    constructor() {
        this.children = {};
        this.count = 0;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string[]} words
     */
    insertAll(words) {
        for (const word of words) {
            let curr = this.root;
            for (const char of word) {
                if (!(char in curr.children)) {
                    curr.children[char] = new TrieNode();
                }
                curr = curr.children[char];
                curr.count += 1;
            }
        }
    }
    //n = words.length, w = word.length
    //TIME: O(n * w)
    //SPACE: O(n * w)
}

class Solution {
    /**
     * @param {string[]} words
     * @return {number[]}
     */
    sumPrefixScores(words) {
        const n = words.length;
        const ans = new Array(n).fill(0);
        const trie = new Trie();
        trie.insertAll(words);
        console.log(ans);

        for (let i = 0; i < n; i++) {
            let curr = trie.root;
            const word = words[i];
            const LEN = word.length;
            for (let j = 0; j < LEN; j++) {
                if (!(word[j] in curr.children)) {
                    break;
                }
                curr = curr.children[word[j]];
                ans[i] += curr.count;
            }
        }
        return ans;
    }
}
