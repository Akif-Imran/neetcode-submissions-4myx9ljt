class Solution {
    /**
     * @param {number[]} preorder
     * @return {boolean}
     */
    verifyPreorder(preorder) {
        const n = preorder.length;
        const stack = [];
        let min = Number.MIN_INTEGER;
        let isPossible = true;
        console.log(min);
        for (let i = 0; i < n; i++) {
            if (preorder[i] < min) {
                isPossible = false;
                break;
            }
            while (stack.length !== 0 && stack[stack.length - 1] < preorder[i]) {
                min = stack.pop();
            }
            stack.push(preorder[i]);
        }
        return isPossible;
    }
}
