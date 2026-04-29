class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length;
        const stack = [];
        let res = 0;
        for (let i = 0; i < n; i++) {
            let pops = 0;
            while (stack.length > 0 && stack.at(-1).height > heights[i]) {
                res = Math.max(res, stack.at(-1).height * (i - stack.at(-1).index));
                stack.pop();
                pops += 1;
            }
            stack.push({ index: i - pops, height: heights[i] });
        }

        while (stack.length > 0) {
            res = Math.max(res, stack.at(-1).height * (n - stack.at(-1).index));
            stack.pop();
        }
        return res;
    }
}
