class Solution {
    /**
     * @param {number[]} candies
     * @param {number} k
     * @return {number}
     */
    shareCandies(candies, k) {
        const kept = {};
        let distinct = 0;

        for (const c of candies) {
            if (!kept[c]) {
                kept[c] = 0;
                distinct++;
            }
            kept[c]++;
        }
        if (k === 0) return distinct;

        let best = 0;
        for (let i = 0; i < candies.length; i++) {
            if (--kept[candies[i]] === 0) distinct--;

            if (i >= k) {
                const out = candies[i - k];
                if (kept[out]++ === 0) distinct++;
            }

            if (i >= k - 1) best = Math.max(best, distinct);
        }
        return best;
    }
}
