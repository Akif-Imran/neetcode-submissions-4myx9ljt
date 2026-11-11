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
    insert(words) {
        for (const word of words) {
            let curr = this.root;
            for (const c of word) {
                if (!curr.children.has(c)) {
                    curr.children.set(c, new TrieNode());
                }
                curr = curr.children.get(c);
            }
            curr.isEnd = true;
        }
        return;
    }
}
class Solution {
    indexPairs(text, words) {
        const ans = [];
        const n = text.length;

        const trie = new Trie();
        trie.insert(words);

        for (let i = 0; i < text.length; i++) {
            let curr = trie.root;
            for (let j = i; j < text.length; j++) {
                if (!curr.children.get(text[j])) break;
                curr = curr.children.get(text[j]);
                if (curr.isEnd) {
                    ans.push([i, j]);
                }
            }
        }

        return ans;
    }
}
