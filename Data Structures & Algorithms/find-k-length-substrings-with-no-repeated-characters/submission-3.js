class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    numKLenSubstrNoRepeats(s, k) {

        const map = new Map();
        let l = 0, res = 0;

        for (let r = 0; r < s.length; r++) {
            map.set(s[r], (map.get(s[r]) || 0) + 1);
            while (map.get(s[r]) > 1 || r - l + 1 > k) {
                let val = map.get(s[l]);
                if (val === 1) {
                    map.delete(s[l]);
                } else {
                    map.set(s[l], val - 1);
                }
                l++;
            }
            if (r - l + 1 === k) {
                res++;
            }
        }
        return res;
    }
}
