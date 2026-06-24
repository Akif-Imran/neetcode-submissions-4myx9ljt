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
     * @return {TreeNode}
     */
    invertTree(root) {
        if (!root) return root;
        const stack = [root];
        while (stack.length !== 0) {
            const node = stack.pop();
            const temp = node.left;
            node.left = node.right;
            node.right = temp;
            if (node.left !== null) stack.push(node.left);
            if (node.right !== null) stack.push(node.right);
        }
        return root;
    }
}
