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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        const dfs = function (root) {
            //[edges,maxpath]
            if (!root) return [0, 0];
            const left_edges = dfs(root.left);
            const right_edges = dfs(root.right);
            if (root.left !== null) left_edges[0] += 1;
            if (root.right !== null) right_edges[0] += 1;

            return [Math.max(left_edges[0], right_edges[0]), left_edges[0] + right_edges[0]];
        };
        return dfs(root)[1];
    }
}
