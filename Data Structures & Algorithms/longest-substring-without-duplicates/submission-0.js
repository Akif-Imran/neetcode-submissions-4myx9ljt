class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let max_count = 0, current_count = 0, left = 0;
        for (let r = 0; r < s.length; r++) {
            for (let i = left; i < r; i++) {
                if (s[i] === s[r]) {
                    left = i + 1;
                    break;
                }
            }
            current_count = r - left + 1;
            max_count = Math.max(current_count, max_count);
        }
        return max_count;
    }
}
