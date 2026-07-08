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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) { //n * 2 log n => O(n log n)
        //function to find a node
        //for each node search both p, q
        //if both found it's a one possible answer.
        let res = root;
        const que = [root];
        while (que.length !== 0) { //n
            for (let i = que.length; i > 0; i--) {
                const node = que.shift();
                const hasP = this.search(node, p.val);//log n
                const hasQ = this.search(node, q.val);//log n
                if (hasP && hasQ) {
                    res = node;
                }
                if (node.left !== null) que.push(node.left);
                if (node.right !== null) que.push(node.right);
            }
        }
        return res;
    }

    search(root, val) {
        if (!root) return false;
        let curr = root;
        while (curr) {
            if (val === curr.val) {
                return true;
            } else if (val > curr.val) {
                curr = curr.right;
            } else {
                curr = curr.left;
            }
        }
        return false;
    }
}
