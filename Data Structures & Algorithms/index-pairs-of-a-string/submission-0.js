class TrieNode {
    constructor() {
        this.children = new Map();
        this.index = [];
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insertText(text) {
        for (let l = 0; l < text.length; l++) {
            let curr = this.root;
            for (let r = l; r < text.length; r++) {
                if (!curr.children.has(text[r])) {
                    curr.children.set(text[r], new TrieNode());
                }
                curr = curr.children.get(text[r]);
                curr.index.push(r);
            }
        }
        return;
    }

    findWords(words) {
        const ans = [];
        let l = 0;
        for (const word of words) {
            let curr = this.root;
            for (let i = 0; i < word.length; i++) {
                if (!curr.children.has(word[i])) break;
                curr = curr.children.get(word[i]);
            }
            for (const val of curr.index) {
                ans.push([val - word.length + 1, val]);
            }
        }
        ans.sort((a, b) => {
            if (a[0] != b[0]) return a[0] - b[0];
            else return a[1] - b[1];
        });
        return ans;
    }
}
class Solution {
    indexPairs(text, words) {
        const trie = new Trie();
        trie.insertText(text);
        return trie.findWords(words);
    }
}
