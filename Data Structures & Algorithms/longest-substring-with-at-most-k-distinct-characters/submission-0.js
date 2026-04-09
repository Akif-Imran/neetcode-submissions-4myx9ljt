class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    lengthOfLongestSubstringKDistinct(s, k) {
        //Time: O(n)
        //Space: O(m) where m is the no. of distinct characters
        const map = new Map();
        let l = 0,
            res = 0,
            distinct = 0;

        for (let r = 0; r < s.length; r++) {
            if (!map.has(s[r])) distinct++;
            map.set(s[r], (map.get(s[r]) || 0) + 1);
            while (distinct > k) {
                let value = map.get(s[l]);
                if (value === 1) {
                    distinct--;
                }
                value--;
                map.set(s[l], value);
                l++;
            }
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
