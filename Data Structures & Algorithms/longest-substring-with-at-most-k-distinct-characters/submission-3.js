class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    lengthOfLongestSubstringKDistinct(s, k) {
        const map = new Map();
        let res = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            map.set(s[r], (map.get(s[r]) || 0) + 1);

            while (map.size > k) {
                let val = map.get(s[l]);
                if (val === 1) map.delete(s[l]);
                else map.set(s[l], val - 1);
                l += 1;
            }
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
