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
     * @return {number[]}
     */
    rightSideView(root) {
        if (!root) return [];
        const deque = [root];
        const res = [];
        while (deque.length !== 0) {
            for (let i = deque.length; i > 0; i--) {
                const node = deque.shift();
                if (i === 1) {
                    //last node on right
                    res.push(node.val);
                }
                if (node.left !== null) deque.push(node.left);
                if (node.right !== null) deque.push(node.right);
            }
        }
        return res;
    }
}
