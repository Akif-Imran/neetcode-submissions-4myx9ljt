class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const que = [];
        const visited = new Set();
        let total = 0;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    total += 1;
                } else if (grid[r][c] === 2) {
                    que.push([r, c]);
                    visited.add(`${r}:${c}`);
                }
            }
        }
        if (total <= 0) return 0;
        const bfs = function (que, visited) {
            let mins = 0;
            while (que.length !== 0) {
                const ql = que.length;
                for (let i = 0; i < ql; i++) {
                    const [row, col] = que.shift();

                    const neighbors = [
                        [-1, 0],
                        [0, 1],
                        [1, 0],
                        [0, -1],
                    ];
                    for (const [dr, dc] of neighbors) {
                        const nr = row + dr;
                        const nc = col + dc;
                        const key = `${nr}:${nc}`;
                        if (
                            Math.min(nr, nc) < 0 ||
                            nr >= ROWS ||
                            nc >= COLS ||
                            grid[nr][nc] === 0 ||
                            visited.has(key)
                        )
                            continue;
                        total -= 1;
                        que.push([nr, nc]);
                        visited.add(key);
                    }
                }
                if (que.length !== 0) mins += 1;
            }
            return total > 0 ? -1 : mins;
        };

        return bfs(que, visited);
    }
}
