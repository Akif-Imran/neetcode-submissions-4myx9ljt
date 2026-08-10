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
     * @return {number}
     */
    maximumAverageSubtree(root) {
        return this.avg(root)[1];
    }
    //sum,max(avg),no. of nodes
    avg(node) {
        if (!node) {
            return [0, 0, 0];
        }
        const left = this.avg(node.left);
        const right = this.avg(node.right);
        const curr_sum = left[0] + node.val + right[0];
        const nodes = left[2] + right[2] + 1;
        const curr_avg = curr_sum / nodes;
        return [curr_sum, Math.max(curr_avg, left[1], right[1]), nodes];
    }
}
