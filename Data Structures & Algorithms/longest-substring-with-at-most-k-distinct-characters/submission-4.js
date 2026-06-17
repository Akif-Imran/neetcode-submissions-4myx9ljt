class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    lengthOfLongestSubstringKDistinct(s, k) {
        const freq = new Map();

        let l = 0;
        let res = 0;
        for (let r = 0; r < s.length; r++) {
            freq.set(s[r], (freq.get(s[r]) || 0) + 1);
            while (freq.size > k) {
                freq.set(s[l], freq.get(s[l]) - 1);
                if (freq.get(s[l]) === 0) freq.delete(s[l]);
                l += 1;
            }
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
