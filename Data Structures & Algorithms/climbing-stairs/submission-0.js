class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const rec = (i) => {
            if (i === n) return 1;
            if (i > n) return 0;
            return rec(i + 1) + rec(i + 2);
        };
        return rec(0);
    }
}
