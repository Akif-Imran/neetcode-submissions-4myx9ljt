class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    numKLenSubstrNoRepeats(s, k) {
        let res = 0;
        const map = new Map();
        for (let l = 0; l <= s.length - k; l++) {
            for (let r = l; r < s.length; r++) {
                if (map.has(s[r])) break;
                map.set(s[r], 1);
                if (r - l + 1 === k) {
                    console.log(s.slice(l, r + 1))
                    res++;
                }
            }
            map.clear();
        }
        return res;
    }
}
