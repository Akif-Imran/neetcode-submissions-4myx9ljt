/**
 * // Definition for a QuadTree node.
 * class Node {
 *     constructor(val = false, isLeaf = false, topLeft = null, topRight = null, bottomLeft = null, bottomRight = null) {
 *         this.val = val;
 *         this.isLeaf = isLeaf;
 *         this.topLeft = topLeft;
 *         this.topRight = topRight;
 *         this.bottomLeft = bottomLeft;
 *         this.bottomRight = bottomRight;
 *     }
 * }
 */

class Solution {
    /**
     * @param {number[][]} grid
     * @return {Node}
     */
    construct(grid) {
        const n = grid.length;
        return this.dfs(grid, 0, 0, n - 1);
    }
    dfs(grid, sr, sc, size) {
        if (size === 0) {
            return new Node(grid[sr][sc], true, null, null, null, null);
        }

        let is_same_val = true;
        let first_val = grid[sr][sc];
        for (let i = sr; i <= sr + size; i++) {
            for (let j = sc; j <= sc + size; j++) {
                if (grid[i][j] !== first_val) {
                    is_same_val = false;
                    break;
                }
            }
        }

        if (is_same_val) {
            return new Node(first_val === 1, true, null, null, null, null);
        }

        const mid = Math.floor(size / 2);

        return new Node(
            0,
            false,
            //sr=0, sc=4, size = 3, mid = 1
            //sr=4, sc=4, size = 3, mid = 1
            this.dfs(grid, sr, sc, mid), //0,0,3 // 0,4,1 //4,4,1
            this.dfs(grid, sr, sc + mid + 1, mid), //0,4,3 // 0,6,1 // 4,6,1
            this.dfs(grid, sr + mid + 1, sc, mid), //4,0,3 // 2,4,1 // 6,4,1
            this.dfs(grid, sr + mid + 1, sc + mid + 1, mid), //4,4,3 // 2,6,1// 6,6,1
        );
    }
}
