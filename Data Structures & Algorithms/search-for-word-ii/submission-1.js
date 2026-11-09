class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const ans = [];
        const wl = words.length;
        const rows = board.length;
        const cols = board[0].length;

        const boardFreq = {};
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const char = board[r][c];
                boardFreq[char] = (boardFreq[char] || 0) + 1;
            }
        }

        const wordFreq = new Array(wl).fill(0);
        for (let i = 0; i < words.length; i++) {
            const freq = {};
            for (const char of words[i]) {
                freq[char] = (freq[char] || 0) + 1;
                if (!boardFreq[char] || boardFreq[char] < freq[char]) {
                    words[i] = "";
                }
            }
            wordFreq[i] = freq;
        }

        const dfs = function (word, i, r, c) {
            if (i === word.length) return true;
            if (
                r < 0 ||
                r >= rows ||
                c < 0 ||
                c >= cols ||
                i > word.length ||
                board[r][c] !== word[i] ||
                board[r][c] === "#"
            ) {
                return false;
            }
            board[r][c] = "#";
            const res =
                dfs(word, i + 1, r - 1, c) ||
                dfs(word, i + 1, r, c + 1) ||
                dfs(word, i + 1, r + 1, c) ||
                dfs(word, i + 1, r, c - 1);
            board[r][c] = word[i];
            return res;
        };

        for (let i = 0; i < wl; i++) {
            let word = words[i];
            if (word === "") continue;
            if (boardFreq[word[0]] > boardFreq[word[word.length - 1]]) {
                word = word.split("").reverse().join("");
            }

            let found = false;
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    if (board[r][c] === word[0]) {
                        found = dfs(word, 0, r, c);
                        if (found) {
                            ans.push(words[i]);
                            break;
                        }
                    }
                }
                if (found) break;
            }
        }
        return ans;
    }
}
