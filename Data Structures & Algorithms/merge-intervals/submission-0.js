class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const res = [];
        let prev = intervals[0];
        for (const curr of intervals) {
            if (prev[1] >= curr[0]) {
                prev[1] = Math.max(curr[1], prev[1]);
            } else {
                res.push(prev);
                prev = curr;
            }
        }
        res.push(prev);
        return res;
    }
}
