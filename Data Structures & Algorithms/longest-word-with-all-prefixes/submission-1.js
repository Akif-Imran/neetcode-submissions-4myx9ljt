class TrieNode {
    constructor() {
        this.children = new Map();
        this.isEnd = false;
    }
}
class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        const n = word.length;
        let curr = this.root;
        let prefixes = 0;
        for (let i = 0; i < n; i += 1) {
            if (!curr.children.has(word[i])) {
                curr.children.set(word[i], new TrieNode());
            }
            curr = curr.children.get(word[i]);
            if (curr.isEnd) {
                prefixes += 1;
            }
        }
        curr.isEnd = true;
        if (prefixes === n - 1) {
            return true;
        }
        return false;
    }

    isValid(word) {
        console.log(word);
        const n = word.length;
        //n - 1; //should have this many prefixes.
        let curr = this.root;
        let prefixes = 0;

        for (let i = 0; i < n - 1; i++) {
            console.log(curr);
            curr = curr.children.get(word[i]);
            if (curr.isEnd) {
                prefixes += 1;
            }
        }
        if (prefixes === n - 1) {
            return true;
        }
        console.log(word, prefixes);
        return false;
    }
}
class Solution {
    /**
     * @param {string[]} words
     * @return {string}
     */
    longestWord(words) {
        const trie = new Trie();
        const ans = ["", ""];
        for (const word of words) {
            ans[1] = word;
            if (trie.insert(word)) {
                const ansLen = ans[0].length;
                const wordLen = ans[1].length;
                if (wordLen > ansLen) {
                    ans[0] = word;
                } else if (wordLen === ansLen) {
                    ans.sort();
                }
            }
        }
        return ans[0];


        for (const word of words) {
            console.log(ans);
            ans[1] = word;
            if (trie.isValid(word)) {
                const ansLen = ans[0].length;
                const wordLen = ans[1].length;
                if (wordLen > ansLen) {
                    ans[0] = word;
                } else if (wordLen === ansLen) {
                    ans.sort();
                }
            }
        }
        return ans[0];
    }
}
