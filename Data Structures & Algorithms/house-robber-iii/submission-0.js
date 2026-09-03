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
    rob(root) {
        const res = this.dfs(root);
        return Math.max(res[0], res[1]);
    }
    dfs(root) {
        if (!root) return [0, 0];
        const left = this.dfs(root.left);
        const right = this.dfs(root.right);

        const rob_this = root.val + left[1] + right[1];
        const skip_this = Math.max(...left) + Math.max(...right);
        return [rob_this, skip_this];
    }
}
