class Solution {
    /**
     * @param {number[][]} nums
     * @return {number[]}
     */
    smallestRange(nums) {
        const k = nums.length;
        const events = [];

        for (let i = 0; i < k; i++) {
            for (let j = 0; j < nums[i].length; j++) {
                events.push([nums[i][j], i]);
            }
        }
        events.sort((a, b) => a[0] - b[0]);
        const freq = new Array(k).fill(0);
        let listsMatched = 0;

        let bestDiff = Infinity;
        let bestMin = 0,
            bestMax = 0;

        let l = 0;
        for (let r = 0; r < events.length; r++) {
            const listIndex = events[r][1];
            if (freq[listIndex] === 0) {
                listsMatched++;
            }
            freq[listIndex]++;
            while (listsMatched === k) {
                const currentDiff = events[r][0] - events[l][0];
                if (currentDiff < bestDiff) {
                    bestDiff = currentDiff;
                    bestMin = events[l][0];
                    bestMax = events[r][0];
                }

                const leftListIndex = events[l][1];
                freq[leftListIndex]--;
                if (freq[leftListIndex] === 0) {
                    listsMatched--;
                }

                l++;
            }
        }

        return [bestMin, bestMax];
    }
}
