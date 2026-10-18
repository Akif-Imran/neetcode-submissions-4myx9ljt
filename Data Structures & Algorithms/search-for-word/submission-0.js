class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const rows = board.length;
        const cols = board[0].length;

        // 1. Count character frequencies on the board
        const boardFreq = {};
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const char = board[r][c];
                boardFreq[char] = (boardFreq[char] || 0) + 1;
            }
        }

        // 2. Early rejection: Check if board has enough of each character
        const wordFreq = {};
        for (const char of word) {
            wordFreq[char] = (wordFreq[char] || 0) + 1;
            if (!boardFreq[char] || boardFreq[char] < wordFreq[char]) {
                return false;
            }
        }

        // 3. Pathological case reversal: Search from the rarest character
        if (boardFreq[word[0]] > boardFreq[word[word.length - 1]]) {
            word = word.split("").reverse().join("");
        }

        // 4. Standard in-place DFS
        const dfs = (r, c, i) => {
            if (i === word.length) return true;

            if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[i]) {
                return false;
            }

            board[r][c] = "#";

            const res =
                dfs(r + 1, c, i + 1) ||
                dfs(r - 1, c, i + 1) ||
                dfs(r, c + 1, i + 1) ||
                dfs(r, c - 1, i + 1);

            board[r][c] = word[i];

            return res;
        };

        // 5. Trigger DFS only on matching starting characters
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (board[r][c] === word[0] && dfs(r, c, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}
