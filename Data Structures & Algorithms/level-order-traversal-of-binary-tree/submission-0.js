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
    levelOrder(root) {
        if (!root) return [];
        const res = [];
        const que = [root];

        while (que.length !== 0) {
            const level = [];
            for (let i = que.length; i > 0; i--) {
                const node = que.shift();
                level.push(node.val);
                if (node.left) que.push(node.left);
                if (node.right) que.push(node.right);
            }
            if (level.length > 0) {
                res.push(level);
            }
        }
        return res;
    }
}
