class Solution {
    /**
     * @param {number[][]}
     * @returns {number}
     */
    shortestPath(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const visited = new Set(["0:0"]);
        const que = [[0, 0]];

        let ans = 0;
        while (que.length !== 0) {
            const len = que.length;
            for (let i = 0; i < len; i++) {
                const [r, c] = que.shift();
                if (r === ROWS - 1 && c === COLS - 1) {
                    return ans;
                }

                const neighbors = [
                    [-1, 0],
                    [0, 1],
                    [1, 0],
                    [0, -1],
                ];
                for (const [dr, dc] of neighbors) {
                    const nr = r + dr;
                    const nc = c + dc;
                    const key = `${nr}:${nc}`;
                    if (
                        Math.min(nr, nc) < 0 ||
                        nr >= ROWS ||
                        nc >= COLS ||
                        grid[nr][nc] === 1 ||
                        visited.has(key)
                    ) {
                        continue;
                    }
                    que.push([nr, nc]);
                    visited.add(key);
                }
            }
            ans += 1;
        }

        return -1;
    }
}
