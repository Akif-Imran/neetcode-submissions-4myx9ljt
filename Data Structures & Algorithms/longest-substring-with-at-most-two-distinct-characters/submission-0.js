class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstringTwoDistinct(s) {
        const map = new Map();

        let l = 0;
        let maxLen = 0;
        for (let r = 0; r < s.length; r++) {
            map.set(s[r], (map.get(s[r]) || 0) + 1)
            if (map.size <= 2) {
                maxLen = Math.max(r - l + 1, maxLen)
            }
            while (map.size > 2) {
                let val = map.get(s[l]) - 1;
                if (val <= 0) {
                    map.delete(s[l])
                } else {
                    map.set(s[l], val)
                }
                l++
            }
        }
        return maxLen;
    }
}
