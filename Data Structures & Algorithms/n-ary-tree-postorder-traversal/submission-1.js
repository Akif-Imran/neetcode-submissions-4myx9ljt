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

        const ans = [];
        for (const c of root.children) {
            ans.push(...this.postorder(c));
        }
        ans.push(root.val);
        return ans;
    }
}
