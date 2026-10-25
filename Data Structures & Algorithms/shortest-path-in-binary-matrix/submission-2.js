class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        if (grid[0][0] === 1 || grid[ROWS - 1][COLS - 1] === 1) return -1;

        const visited = new Set();
        const que = [];
        que.push([0, 0]);
        visited.add("0:0");

        let length = 1;
        while (que.length !== 0) {
            const n = que.length;
            for (let i = 0; i < n; i++) {
                const [r, c] = que.shift();
                if (r === ROWS - 1 && c === COLS - 1) {
                    return length;
                }

                //clock wise look up for 8 directionally neightbors
                const neightbors = [
                    [-1, 0], //top
                    [-1, 1], //top-right
                    [0, 1], //right
                    [1, 1], //bottom-right
                    [1, 0], //bottom
                    [1, -1], //bottom-left
                    [0, -1], //left
                    [-1, -1], //top-left
                ];
                for (const [dr, dc] of neightbors) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (
                        Math.min(nr, nc) < 0 ||
                        nr >= ROWS ||
                        nc >= COLS ||
                        grid[nr][nc] === 1 ||
                        visited.has(`${nr}:${nc}`)
                    )
                        continue;
                    que.push([nr, nc]);
                    visited.add(`${nr}:${nc}`);
                }
            }
            length += 1;
        }
        return -1;
    }
}
