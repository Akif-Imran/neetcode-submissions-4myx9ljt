class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length;
        let res = 0;
        for (let i = 0; i < n; i++) {
            let minHeight = 1000;
            for (let j = i; j < n; j++) {
                minHeight = Math.min(minHeight, heights[j]);
                res = Math.max(res, minHeight * (j - i + 1));
                console.log(minHeight, res, "looping: ", heights[j], j);
            }
        }
        return res;
    }
}
