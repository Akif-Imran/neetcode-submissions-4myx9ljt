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
    countUnivalSubtrees(root) {
        return this.dfs(root, root?.val ?? 0)[0];
    }

    //[count,isUniValue,childval]
    dfs(root, val) {
        if (!root) return [0, true, val];
        const left = this.dfs(root.left, root.val);
        const right = this.dfs(root.right, root.val);
        let count = left[0] + right[0];
        if (!left[1] || !right[1]) {
            return [count, false, root.val];
        } else if (root.val === left[2] && root.val === right[2]) {
            return [count + 1, true, root.val];
        }
        return [count, false, root.val];
    }
}
