class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    numKLenSubstrNoRepeats(s, k) {
        if (k > s.length) return 0;

        const n = s.length;
        const seen = new Set();
        let l = 0;
        let res = 0;
        for (let r = 0; r < n; r++) {
            while (seen.has(s[r])) {
                seen.delete(s[l]);
                l += 1;
            }
            seen.add(s[r]);
            if (r - l + 1 === k) {
                res += 1;
                seen.delete(s[l]);
                l += 1;
            }
        }
        return res;
    }
}
