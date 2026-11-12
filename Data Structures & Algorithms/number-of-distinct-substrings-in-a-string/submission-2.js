class TrieNode {
    constructor() {
        this.children = {};
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(text) {
        for (let i = 0; i < text.length; i++) {
            let curr = this.root;
            for (let j = i; j < text.length; j++) {
                const char = text[j];
                if (!(char in curr.children)) {
                    curr.children[char] = new TrieNode();
                }
                curr = curr.children[char];
            }
        }
    }

    getSpan(root = this.root) {
        let count = 0;
        for (const node of Object.values(root.children)) {
            count += this.getSpan(node);
        }
        return count + 1;
    }
}
class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countDistinct(s) {
        const trie = new Trie();
        trie.insert(s);
        let count = trie.getSpan(trie.root);
        return count - 1;
    }
}
