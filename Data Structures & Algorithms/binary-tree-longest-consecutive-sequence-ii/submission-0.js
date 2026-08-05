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
        let max_len = 0;
        const path = function (node) {
            if (!node) return [0, 0];

            let inc = 1,
                dcr = 1;

            if (node.left !== null) {
                const left = path(node.left);
                if (node.val === node.left.val + 1) {
                    dcr = left[1] + 1;
                } else if (node.val === node.left.val - 1) {
                    inc = left[0] + 1;
                }
            }

            if (node.right !== null) {
                const right = path(node.right);
                if (node.val === node.right.val + 1) {
                    dcr = Math.max(dcr, right[1] + 1);
                } else if (node.val === node.right.val - 1) {
                    inc = Math.max(inc, right[0] + 1);
                }
            }

            max_len = Math.max(max_len, inc + dcr - 1);
            return [inc, dcr];
        };
        path(root);
        return max_len;
    }
}
