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
            let start = i;
            while (stack.length > 0 && stack.at(-1)[1] > heights[i]) {
                const [index, height] = stack.pop();
                res = Math.max(res, height * (i - index));
                start = index;
            }
            stack.push([start, heights[i]]);
        }

        while (stack.length > 0) {
            const [index, height] = stack.pop();
            res = Math.max(res, height * (n - index));
        }
        return res;
    }
}
