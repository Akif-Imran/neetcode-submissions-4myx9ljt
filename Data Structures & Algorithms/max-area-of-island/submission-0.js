class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        const visited = new Set();
        const cells = new Uint8Array(rows * cols);
        for (let r = 0; r < rows; r++)
            for (let c = 0; c < cols; c++) cells[r * cols + c] = grid[r][c];

        let count = 0;
        const dfs = function (r, c) {
            if (r < 0 || c < 0 || r >= rows || c >= cols) return 0;
            const i = r * cols + c;
            if (cells[i] === 0) return 0;

            cells[i] = 0;
            return 1 + dfs(r - 1, c) + dfs(r + 1, c) + dfs(r, c - 1) + dfs(r, c + 1);
        };

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const index = r * cols + c;
                if (cells[index] !== 0) {
                    count = Math.max(count, dfs(r, c));
                }
            }
        }
        return count;
    }
}
