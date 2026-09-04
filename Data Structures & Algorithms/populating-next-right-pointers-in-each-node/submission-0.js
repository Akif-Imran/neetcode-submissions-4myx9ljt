/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, left = null, right = null, next = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} root
     * @return {Node}
     */
    connect(root) {
        if (!root) return null;

        const queue = [root];
        while (queue.length !== 0) {
            const len = queue.length;
            let prev = queue[0],
                curr = queue[0];
            for (let i = len; i > 0; i--) {
                curr = queue.shift();
                prev.next = curr;
                curr.next = null;

                if (curr.left) queue.push(curr.left);
                if (curr.right) queue.push(curr.right);
                prev = curr;
            }
        }
        return root;
    }
}
