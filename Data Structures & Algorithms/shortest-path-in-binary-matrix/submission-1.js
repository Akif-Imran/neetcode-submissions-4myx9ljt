class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    shortestPathBinaryMatrix(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        if (grid[0][0] === 1 || grid[ROWS - 1][COLS - 1] === 1) {
            return -1;
        }

        const visited = new Set();
        const que = [];
        que.push([0, 0]);
        visited.add(`${0}:${0}`);

        let length = 1;
        while (que.length) {
            console.log(que);
            const qn = que.length;
            for (let qi = 0; qi < qn; qi++) {
                const [r, c] = que.shift();
                if (r === ROWS - 1 && c === COLS - 1) {
                    return length;
                }

                const neigbors = [
                    [-1, 0], //top
                    [-1, 1], //top-right
                    [0, 1], //right
                    [1, 1], //bottom-right
                    [1, 0], //bottom
                    [1, -1], //bottom-left
                    [0, -1], //left
                    [-1, -1], //top-left
                ];
                for (const [dr, dc] of neigbors) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (
                        Math.min(nr, nc) < 0 ||
                        nr >= ROWS ||
                        nc >= COLS ||
                        visited.has(`${nr}:${nc}`) ||
                        grid[nr][nc] === 1
                    ) {
                        continue;
                    }
                    que.push([nr, nc]);
                    visited.add(`${nr}:${nc}`);
                }
            }
            length += 1;
        }

        return -1;
    }
}
