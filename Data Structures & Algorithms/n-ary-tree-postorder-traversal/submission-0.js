/**
 * Definition for a binary tree node.
 * class Node {
 *     constructor(val = 0, children = []) {
 *         this.val = val;
 *         this.children = children;
 *     }
 * }
 */
class Solution {
    /**
     * @param {Node|null} root
     * @return {number[]}
     */
    postorder(root) {
        if (!root) return [];
        const stack = [root];
        const res = [];
        while (stack.length !== 0) {
            const node = stack.pop();
            res.push(node.val);
            for (const c of node.children) {
                stack.push(c);
            }
        }
        res.reverse();
        return res;
    }
}
