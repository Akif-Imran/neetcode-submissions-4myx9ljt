class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    numKLenSubstrNoRepeats(s, k) {
        if (s.length < k) return 0;

        const map = new Map();
        let res = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            if (map.get(s[r])) {
                while (s[l] !== s[r]) {
                    map.delete(s[l]);
                    l++;
                }
                l++;
            }
            map.set(s[r], 1);
            if (r - l + 1 > k) {
                map.delete(s[l]);
                l++;
            }
            if (r - l + 1 === k) {
                // console.log(s.slice(l, r + 1))
                res++;
            }
            // console.log(s[r], r, l, map, res);
        }
        return res;
    }
}
