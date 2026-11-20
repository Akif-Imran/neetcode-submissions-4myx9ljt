class Solution {
    /**
     * @param {number[]} candies
     * @param {number} k
     * @return {number}
     */
    shareCandies(candies, k) {
        // count of each flavor we still keep (i.e., outside the window)
        const kept = new Map();
        for (const c of candies) kept.set(c, (kept.get(c) ?? 0) + 1);
        if (k === 0) return kept.size;

        const giveAway = (c) => {
            const n = kept.get(c);
            if (n === 1) kept.delete(c);
            else kept.set(c, n - 1);
        };
        const takeBack = (c) => kept.set(c, (kept.get(c) ?? 0) + 1);

        let best = 0;
        for (let i = 0; i < candies.length; i++) {
            giveAway(candies[i]);
            if (i >= k) takeBack(candies[i - k]);
            if (i >= k - 1) best = Math.max(best, kept.size);
        }
        return best;
    }
}
