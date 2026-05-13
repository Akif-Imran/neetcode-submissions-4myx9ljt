class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const cache = new Map();
        const rec = (i) => {
            if (i === n) return 1;
            if (i > n) return 0;
            if (cache.has(i)) return cache.get(i);
            const res = rec(i + 1) + rec(i + 2);
            cache.set(i, res);
            return res;
        };
        return rec(0);
    }
}
