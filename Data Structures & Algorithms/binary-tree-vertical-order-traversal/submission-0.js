/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    verticalOrder(root) {
        const h = this.height(root);
        const cols = new Array(2 * h - 1).fill(null).map(() => new Array(0));
        console.log(cols);
        let curr = root;
        let rootCol = 1;
        while (curr.left) {
            curr = curr.left;
            rootCol += 1;
        }
        this.mapCols(root, rootCol);

        const que = [root];
        while (que.length !== 0) {
            const len = que.length;
            for (let i = len; i > 0; i--) {
                const node = que.shift();
                console.log([node.val, node.col]);
                cols[node.col - 1].push(node.val);
                if (node.left !== null) {
                    que.push(node.left);
                }
                if (node.right !== null) {
                    que.push(node.right);
                }
            }
        }

        return cols.filter((row) => row.length > 0);
    }
    mapCols(root, col) {
        if (!root) return;
        root.col = col;
        console.log(root.val, col);
        this.mapCols(root.left, col - 1);
        this.mapCols(root.right, col + 1);
    }

    height(root) {
        if (!root) return 0;
        const left = this.height(root.left);
        const right = this.height(root.right);
        return Math.max(left, right) + 1;
    }
}
