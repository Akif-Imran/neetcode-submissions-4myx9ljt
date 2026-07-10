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
        if (!root1) return root2;
        if (!root2) return root1;

        const que1 = [root1];
        const que2 = [root2];

        while (que1.length !== 0) {
            const n = que1.length;
            for (let i = n; i > 0; i--) {
                const node1 = que1.shift();
                const node2 = que2.shift();
                node2.val = node2.val + node1.val;

                if (node1.left && !node2.left) {
                    node2.left = new TreeNode(0);
                }
                if (node1.right && !node2.right) {
                    node2.right = new TreeNode(0);
                }
                if (node1.left) que1.push(node1.left);
                if (node1.right) que1.push(node1.right);
                if (node1.left && node2.left) que2.push(node2.left);
                if (node1.right && node2.right) que2.push(node2.right);
            }
        }

        return root2;
    }
}
