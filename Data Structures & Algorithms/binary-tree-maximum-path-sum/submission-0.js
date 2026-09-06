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
            const left = dfs(root.left);
            const right = dfs(root.right);

            const root_path = root.val + left + right;
            const left_path = left + root.val;
            const right_path = right + root.val;
            const node_max_val = Math.max(
                root.val, //=> select root only and no children
                left_path, //=> select left node + current node
                right_path, //=> select right node + current node
            );
            max = Math.max(node_max_val, root_path, max);
            // console.log(root.val, root_path, left_path, right_path, Math.max(node_max_val, root_path), max);

            return node_max_val;
        };

        dfs(root);
        return max;
    }
}
