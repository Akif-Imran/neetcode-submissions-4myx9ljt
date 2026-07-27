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
     * @param {TreeNode} root1
     * @param {TreeNode} root2
     * @return {TreeNode}
     */
    mergeTrees(root1, root2) {
        if (!root1 && !root2) return null;
        if (!root1) return new TreeNode(root2.val);
        if (!root2) return new TreeNode(root1.val);

        const root = new TreeNode(root1.val + root2.val);
        root.left = this.mergeTrees(root1.left, root2.left);
        root.right = this.mergeTrees(root1.right, root2.right);
        return root;
    }
}
