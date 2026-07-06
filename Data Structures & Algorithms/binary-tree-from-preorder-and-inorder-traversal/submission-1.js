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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        let pre_idx = 0;
        const map = new Map();
        inorder.forEach((val, i) => map.set(val, i));

        const dfs = (l, r) => {
            if (l > r) return null;
            const root_val = preorder[pre_idx];
            pre_idx++;
            const mid = map.get(root_val);
            const root = new TreeNode(root_val);
            root.left = dfs(l, mid - 1);
            root.right = dfs(mid + 1, r);
            return root;
        };
        return dfs(0, inorder.length - 1);
    }
}
