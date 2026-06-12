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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if (root === null) return root;

        if (key > root.val) {
            root.right = this.deleteNode(root.right, key);
        } else if (key < root.val) {
            root.left = this.deleteNode(root.left, key);
        } else {
            if (root.right === null) {
                return root.left;
            } else if (root.left === null) {
                return root.right;
            } else {
                //has both children
                let curr = root.right;
                while (curr && curr.left) {
                    curr = curr.left;
                }
                root.val = curr.val;
                root.right = this.deleteNode(root.right, curr.val);
            }
        }
        return root;
    }
}
