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
     * @param {number} target
     * @return {number}
     */
    closestValue(root, target) {
        let ans = root.val;
        let curr = root;
        while (curr !== null) {
            if (target < curr.val) {
                curr = curr.left;
            } else if (target > curr.val) {
                curr = curr.right;
            } else {
                ans = curr.val;
                break;
            }
            if (curr && Math.abs(target - ans) > Math.abs(target - curr.val)) {
                ans = curr.val;
            }
        }
        return ans;
    }
}
