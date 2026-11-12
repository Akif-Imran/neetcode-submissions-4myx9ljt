class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    countDistinct(s) {
        let count = 0;
        const set = new Set();
        for (let i = 0; i < s.length; i++) {
            for (let j = i; j < s.length; j++) {
                const word = s.slice(i, j + 1);
                if (set.has(word)) continue;
                count += 1;
                set.add(word);
            }
        }
        return count;
    }
}
