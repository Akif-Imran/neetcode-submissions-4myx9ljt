class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {

        let si = 0;
        let ti = 0;
        while (si < s.length) {
            if (s[si] === t[ti]) {
                ti++;
            }
            si++;
        }
        const charCount = t.length - ti;
        return charCount;
    }
}
