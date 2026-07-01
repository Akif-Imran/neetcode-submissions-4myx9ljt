class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    numKLenSubstrNoRepeats(s, k) {
        const n = s.length;
        const seen = new Set();
        let l = 0,
            res = 0;
        for (let r = 0; r < n; r++) {
            while (seen.has(s[r]) || r - l + 1 > k) {
                seen.delete(s[l]);
                l += 1;
            }
            seen.add(s[r]);
            if (r - l + 1 === k) {
                res += 1;
            }
        }
        return res;
    }
}
