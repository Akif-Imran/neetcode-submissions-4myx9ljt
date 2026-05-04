class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let l = 0;
        let r = x;
        let res = 0;
        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            if (mid * mid > x) {
                r = mid - 1;
            } else if (mid * mid <= x) {
                l = mid + 1;
                res = Math.max(res, mid);
            }
        }
        return res;
    }
}
