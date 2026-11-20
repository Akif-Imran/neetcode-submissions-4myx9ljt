class Solution {
    equalCountSubstrings(s, count) {
        const n = s.length;
        const maxLetters = new Set(s).size;
        let res = 0;

        for (let letters = 1; letters <= maxLetters; letters++) {
            const len = letters * count;
            if (len > n) break;

            const freq = new Array(26).fill(0);
            let good = 0; // letters whose freq is exactly `count`

            for (let i = 0; i < n; i++) {
                const add = s.charCodeAt(i) - 97;
                if (++freq[add] === count) good++;
                else if (freq[add] === count + 1) good--;

                if (i >= len) {
                    const drop = s.charCodeAt(i - len) - 97;
                    if (--freq[drop] === count) good++;
                    else if (freq[drop] === count - 1) good--;
                }

                if (i >= len - 1 && good === letters) res++;
            }
        }
        return res;
    }
}