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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        const p_trav = this.preorderTrav(p);
        const q_trav = this.preorderTrav(q);
        if (p_trav.length !== q_trav.length) return false;
        for (let i = 0; i < p_trav.length; i++) {
            if (p_trav[i] !== q_trav[i]) return false;
        }
        return true;
    }

    preorderTrav(root) {
        if (!root) return [];
        const stack = [root];
        const res = [];

        while (stack.length !== 0) {
            const node = stack.pop();
            if (node === null) {
                res.push(-101);
                continue;
            } else {
                res.push(node.val);
                stack.push(node.left);
                stack.push(node.right);
            }
        }
        return res;
    }
}
