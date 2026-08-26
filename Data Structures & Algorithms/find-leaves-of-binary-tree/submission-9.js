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
    findLeaves(root) {
        const ans = [];
        const dfs = function (node) {
            if (!node) return -1;
            const left = dfs(node.left);
            const right = dfs(node.right);
            const height = Math.max(left, right) + 1;
            if (ans.length === height) ans.push([]);
            ans[height].push(node.val);
            return height;
        };
        dfs(root);
        return ans;
    }
}
