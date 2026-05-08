class Solution {
    /**
     * @param {number} num
     * @return {boolean}
     */
    isPerfectSquare(num) {
        0 - 16;

        let l = 0;
        let r = num;
        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);

            if (mid * mid === num) return true;
            else if (mid * mid > num) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return false;
    }
}
