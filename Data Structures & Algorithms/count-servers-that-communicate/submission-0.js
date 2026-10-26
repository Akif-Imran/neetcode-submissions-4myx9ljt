class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    countServers(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const que = [];
        const visited = new Set();

        const dfs = function (r, c) {
            if (r < 0 || r >= ROWS || c < 0 || c >= COLS || grid[r][c] === 0) {
                return 0;
            }
            grid[r][c] = 0;
            const total = dfs(r - 1, c) + dfs(r, c + 1) + dfs(r + 1, c) + dfs(r, c - 1);
            return 1 + total;
        };

        let servers = 0;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    const s = dfs(r, c);
                    servers += s > 1 ? s : 0;
                }
            }
        }
        return servers;
    }
}
