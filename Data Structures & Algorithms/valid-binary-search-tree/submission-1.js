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
     * @return {boolean}
     */
    isValidBST(root) {
        const trav = this.inorder(root);
        for (let i = 1; i < trav.length; i++) {
            if (trav[i] <= trav[i - 1]) return false;
        }
        return true;
    }

    inorder(root) {
        if (!root) return [];

        const res = [];
        const stack = [];
        let curr = root;
        while (curr || stack.length !== 0) {
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
