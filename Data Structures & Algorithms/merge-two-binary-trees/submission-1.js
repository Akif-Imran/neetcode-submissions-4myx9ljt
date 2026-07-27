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

        while (que2.length !== 0) {
            for (let i = que2.length; i > 0; i--) {
                const node1 = que1.shift();
                const node2 = que2.shift();
                node2.val += node1 ? node1.val : 0;
                if (node2.left === null) {
                    node2.left = node1 ? node1.left : null;
                } else {
                    que2.push(node2.left);
                    que1.push(node1?.left);
                }
                if (node2.right === null) {
                    node2.right = node1 ? node1.right : null;
                } else {
                    que2.push(node2.right);
                    que1.push(node1?.right);
                }
            }
        }

        return root2;
    }
}
