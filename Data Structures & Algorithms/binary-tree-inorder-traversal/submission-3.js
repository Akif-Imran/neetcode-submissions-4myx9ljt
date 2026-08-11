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
    inorderTraversal(root) {
        if (!root) return [];

        const stack = [];
        const res = [];
        let curr = root;

        while (curr || stack.length) {
            while (curr) {
                stack.push(curr);
                curr = curr.left;
            }
            const node = stack.pop();
            res.push(node.val);
            curr = node.right;
        }
        return res;
    }
}
