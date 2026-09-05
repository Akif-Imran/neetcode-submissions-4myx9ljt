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
class BSTIterator {
    /**
     * @constructor
     * @param {TreeNode} root
     */
    constructor(root) {
        this.res = [];
        this.root = root;
        const stack = [];
        let curr = root;
        while (curr || stack.length !== 0) {
            while (curr) {
                stack.push(curr);
                curr = curr.left;
            }
            const node = stack.pop();
            this.res.push(node.val);
            curr = node.right;
        }
        this.idx = 0;
    }

    /**
     * @return {number}
     */
    next() {
        return this.res[this.idx++];
    }

    /**
     * @return {boolean}
     */
    hasNext() {
        return this.idx !== this.res.length;
    }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
