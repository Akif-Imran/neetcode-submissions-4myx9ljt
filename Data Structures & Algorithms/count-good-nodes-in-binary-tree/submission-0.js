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
    goodNodes(root) {
        return this.dfs(root, root.val);
    }

    dfs(root, max) {
        if (!root) return 0;
        let count = 0;
        if (root.val >= max) {
            count += 1;
            max = root.val;
        }
        return count + this.dfs(root.left, max) + this.dfs(root.right, max);
    }
}
