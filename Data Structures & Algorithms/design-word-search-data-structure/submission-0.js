class WordDictionary {
    constructor() {
        this.children = new Map();
        this.is_word = false;
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
        let curr = this;
        for (const char of word) {
            if (!curr.children.has(char)) {
                curr.children.set(char, new WordDictionary());
            }
            curr = curr.children.get(char);
        }
        curr.is_word = true;
        return;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(word, 0, this);
    }
    dfs(word, idx, node) {
        let curr = node;
        for (let i = idx; i < word.length; i++) {
            const char = word[i];
            if (char === ".") {
                for (const [_, value] of curr.children.entries()) {
                    if (this.dfs(word, i + 1, value)) return true;
                }
                return false;
            } else {
                if (!curr.children.has(char)) {
                    return false;
                }
                curr = curr.children.get(char);
            }
        }
        return curr.is_word;
    }
}
