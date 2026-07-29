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
        if (!root) return [];

        const que = [[root, 0]];
        const map = new Map();
        let minCol = 0;
        let maxCol = 0;

        while (que.length !== 0) {
            const len = que.length;
            for (let i = len; i > 0; i--) {
                const [node, pos] = que.shift();
                if (!map.has(pos)) map.set(pos, []);
                map.get(pos).push(node.val);
                minCol = Math.min(minCol, pos);
                maxCol = Math.max(maxCol, pos);

                if (node.left !== null) que.push([node.left, pos - 1]);
                if (node.right !== null) que.push([node.right, pos + 1]);
            }
        }
        const res = [];
        for (let i = minCol; i <= maxCol; i++) {
            res.push(map.get(i));
        }
        return res;
    }
}
