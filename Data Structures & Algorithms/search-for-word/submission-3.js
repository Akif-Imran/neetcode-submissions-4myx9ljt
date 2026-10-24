class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const rows = board.length;
        const cols = board[0].length;

        const boardFreq = {};
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const char = board[r][c];
                boardFreq[char] = (boardFreq[char] || 0) + 1;
            }
        }

        const wordFreq = {};
        for (const char of word) {
            wordFreq[char] = (wordFreq[char] || 0) + 1;
            if (!boardFreq[char] || boardFreq[char] < wordFreq[char]) {
                return false;
            }
        }

        if (boardFreq[word[0]] > boardFreq[word[word.length - 1]]) {
            word = word.split("").reverse().join("");
        }

        const grid1D = new Uint8Array(rows * cols);
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const index = r * cols + c;
                grid1D[index] = board[r][c].charCodeAt(0);
            }
        }

        const targetCodes = new Uint8Array(word.length);
        for (let i = 0; i < word.length; i++) targetCodes[i] = word.charCodeAt(i);

        const dfs = (index, charIndex) => {
            if (charIndex === targetCodes.length) return true;

            // If the character doesn't match, fail immediately
            if (grid1D[index] !== targetCodes[charIndex]) {
                return false;
            }

            // Calculate current row and col to prevent wrapping
            const r = Math.floor(index / cols);
            const c = index % cols;

            if (
                r < 0 ||
                r >= rows ||
                c < 0 ||
                c >= cols ||
                grid1D[index] !== targetCodes[charIndex]
            ) {
                return false;
            }

            const temp = grid1D[index];
            grid1D[index] = 35; // '#'

            // Only move if we aren't on the respective edge
            const res =
                (c < cols - 1 && dfs(index + 1, charIndex + 1)) || // Right
                (c > 0 && dfs(index - 1, charIndex + 1)) || // Left
                (r < rows - 1 && dfs(index + cols, charIndex + 1)) || // Down
                (r > 0 && dfs(index - cols, charIndex + 1)); // Up

            grid1D[index] = temp;
            return res;
        };
        // const dfs = (index, charIndex) => {
        //     if (charIndex === targetCodes.length) return true;
        //     const r = Math.floor(index / cols);
        //     const c = index % cols;

        //     if (
        //         r < 0 ||
        //         r >= rows ||
        //         c < 0 ||
        //         c >= cols ||
        //         grid1D[index] !== targetCodes[charIndex]
        //     ) {
        //         return false;
        //     }

        //     const temp = grid1D[index];
        //     grid1D[index] = 35; // '#'
        //     const res =
        //         dfs(index + 1, charIndex + 1) || // Right
        //         dfs(index - 1, charIndex + 1) || // Left
        //         dfs(index + cols, charIndex + 1) || // Down
        //         dfs(index - cols, charIndex + 1); // Up

        //     grid1D[index] = temp;
        //     return res;
        // };

        for (let i = 0; i < grid1D.length; i++) {
            if (grid1D[i] === targetCodes[0] && dfs(i, 0)) {
                return true;
            }
        }

        return false;
    }
}
