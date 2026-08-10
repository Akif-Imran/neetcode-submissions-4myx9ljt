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
        return this.path(root, null)[1];
    }

    path(node, parent) {
        if (!node) return [0, 0, parent.val];

        const left = this.path(node.left, node);
        const right = this.path(node.right, node);
        let max = Math.max(left[1], right[1]);
        let len = 1;

        if (left[2] - node.val !== 1 && right[2] - node.val !== 1) {
            return [1, Math.max(max, 1), node.val];
        }

        if (left[2] - node.val !== 1) {
            len = right[0] + 1;
        } else if (right[2] - node.val !== 1) {
            len = left[0] + 1;
        } else {
            len = Math.max(left[0], right[0]) + 1;
        }
        return [len, Math.max(max, len), node.val];
    }
}
