class Solution {
    /**
     * @param {number[]} preorder
     * @return {boolean}
     */
    verifyPreorder(preorder) {
        const stack = [];
        let min_val = Number.MIN_SAFE_INTEGER;
        let isPossible = true;

        for (let i = 0; i < preorder.length; i++) {
            if (min_val > preorder[i]) {
                isPossible = false;
                break;
            }
            while (stack.length !== 0 && preorder[i] > stack[stack.length - 1]) {
                min_val = stack.pop();
            }
            stack.push(preorder[i]);
        }
        return isPossible;
    }
}
