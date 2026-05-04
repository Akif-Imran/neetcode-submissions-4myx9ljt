class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        const n = weights.length;
        let l = Math.max(...weights);
        let r = weights.reduce((a, b) => a + b, 0);
        let res = r;

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            let d = 1;
            let currCap = mid;
            for (let i = 0; i < n; i++) {
                if (currCap - weights[i] < 0) {
                    d += 1;
                    if (d > days) break;
                    currCap = mid;
                }
                currCap -= weights[i];
            }
            if (d > days) {
                l = mid + 1;
            } else {
                res = Math.min(res, mid);
                r = mid - 1;
            }
        }
        return res;
    }
}
