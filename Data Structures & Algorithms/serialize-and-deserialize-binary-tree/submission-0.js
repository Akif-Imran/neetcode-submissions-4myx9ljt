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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        if (!root) return "";
        const res = [];
        const que = [root];
        while (que.length !== 0) {
            const len = que.length;
            for (let i = len; i > 0; i--) {
                const node = que.shift();
                const val = node !== null ? node.val : null;
                res.push(val);
                if (node) {
                    que.push(node.left);
                    que.push(node.right);
                }
            }
        }
        console.log("se: ", res);
        return JSON.stringify(res);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        if (data === "") return null;

        const res = JSON.parse(data);
        const root = new TreeNode(res[0]);
        const que = [root];
        let i = 1;

        while (que.length !== 0) {
            const curr = que.shift();
            if (res[i] !== null) {
                curr.left = new TreeNode(res[i]);
                que.push(curr.left);
            }
            i += 1;
            if (i < res.length && res[i] !== null) {
                curr.right = new TreeNode(res[i]);
                que.push(curr.right);
            }
            i += 1;
        }

        return root;
    }
}
