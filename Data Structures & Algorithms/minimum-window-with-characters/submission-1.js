class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const total = new Array(123).fill(0);
        let total_matches = 0;
        for (let i = 0; i < t.length; i++) {
            if (++total[t.charCodeAt(i)] == 1) {
                total_matches += 1;
            };

        }
        // console.log(total, total_matches);

        const curr = new Array(123).fill(0);
        let curr_matches = 0;
        let res = Infinity;
        let str = "";
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            const ch = s.charCodeAt(r);
            if (++curr[ch] === total[ch]) {
                curr_matches += 1;
            }
            while (curr_matches === total_matches) {
                if (r - l + 1 < res) {
                    res = r - l + 1;
                    str = s.slice(l, r + 1);
                }
                const ch = s.charCodeAt(l);
                console.log(curr[ch], total[ch])
                if (t.includes(s[l]) && --curr[ch] < total[ch]) curr_matches -= 1;
                l += 1;

            }
        }
        return str;
    }
}
