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

    maxPathSum(root) {
        let max = -1001;
        const dfs = function (root) {
            if (!root) return 0;
            const left = Math.max(0, dfs(root.left));
            const right = Math.max(0, dfs(root.right));

            const root_path = root.val + left + right;
            max = Math.max(root_path, max);
            return root.val + Math.max(left, right);
        };

        dfs(root);
        return max;
    }
}
