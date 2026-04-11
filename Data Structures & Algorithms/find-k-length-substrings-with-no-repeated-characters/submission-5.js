class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    numKLenSubstrNoRepeats(s, k) {
        if (k > s.length) return 0;
        const n = s.length;
        const map = new Map();

        let res = 0;
        let l = 0;
        for (let r = 0; r < n; r++) {
            map.set(s[r], (map.get(s[r]) || 0) + 1);
            console.log(map);
            while (map.get(s[r]) > 1 || r - l + 1 > k) {
                const val = map.get(s[l]);
                if (val === 1) map.delete(s[l]);
                else map.set(s[l], val - 1);
                l++;
            }
            if (r - l + 1 === k) {
                console.log(s.slice(l, r + 1))
                res += 1;
            }
        }
        return res;
    }
}
