class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    lengthOfLongestSubstringKDistinct(s, k) {
        const n = s.length;
        const map = new Map();
        let l = 0,
            res = 0;
        for (let r = 0; r < n; r++) {
            map.set(s[r], (map.get(s[r]) || 0) + 1);
            while (map.size > k) {
                map.set(s[l], map.get(s[l]) - 1);
                if (map.get(s[l]) === 0) {
                    map.delete(s[l]);
                }
                l += 1;
            }
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
