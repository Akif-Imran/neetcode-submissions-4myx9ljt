class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    validWordSquare(words) {
        const rows = words.length;
        let cols = 0;
        for (const word of words) {
            cols = Math.max(cols, word.length);
        }
        if (rows !== cols) return false;
        const limit = Math.max(rows, cols);

        for (let i = 0; i < limit; i++) {
            for (let j = i; j < limit; j++) {
                const row_ch = words[i][j] || "";
                const cols_ch = words[j][i] || "";
                if (row_ch !== cols_ch) return false;
            }
        }
        return true;
    }
}
