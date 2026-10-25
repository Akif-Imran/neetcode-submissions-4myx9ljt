class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        let total = 0;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    total += 1;
                }
            }
        }
        const bfs = function (r, c) {
            console.log(r, c);
            const que = [[r, c]];
            const visited = new Set();
            visited.add(`${r}:${c}`);

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
                        grid[nr][nc] = 2;
                        total -= 1;
                        que.push([nr, nc]);
                        visited.add(key);
                    }
                }
                if (que.length !== 0) mins += 1;
            }

            return total > 0 ? -1 : mins;
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 2) {
                    return bfs(r, c);
                }
            }
        }
    }
}
