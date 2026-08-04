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
    longestConsecutive(root) {
        return this.path(root, root.val, 1);
    }

    path(node, root_val, path) {
        if (!node) return 1;
        if (node.val !== root_val + 1) {
            path = 1;
        } else {
            path += 1;
        }
        const left = this.path(node.left, node.val, path);
        const right = this.path(node.right, node.val, path);

        return Math.max(path, left, right);
    }
}
