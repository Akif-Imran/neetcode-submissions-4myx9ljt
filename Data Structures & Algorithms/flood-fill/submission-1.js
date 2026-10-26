class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        const ROWS = image.length;
        const COLS = image[0].length;
        const temp = image[sr][sc];
        image[sr][sc] = color;
        const que = [[sr, sc]];
        const visited = new Set([`${sr}:${sc}`]);
        let head = 0;
        while (head < que.length) {
            const [r, c] = que[head++];
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
                    nr < 0 ||
                    nr >= ROWS ||
                    nc < 0 ||
                    nc >= COLS ||
                    visited.has(key) ||
                    image[nr][nc] === color ||
                    image[nr][nc] !== temp
                ) {
                    continue;
                }
                visited.add(key);
                image[nr][nc] = color;
                que.push([nr, nc]);
            }
        }
        return image;
    }
}
