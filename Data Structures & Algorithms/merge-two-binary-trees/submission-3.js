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
        const v1 = root1 ? root1.val : 0;
        const v2 = root2 ? root2.val : 0;
        const root = new TreeNode(v1 + v2);
        root.left = this.mergeTrees(root1 ? root1.left : null, root2 ? root2.left : null);
        root.right = this.mergeTrees(root1 ? root1.right : null, root2 ? root2.right : null);
        return root;
    }
}
