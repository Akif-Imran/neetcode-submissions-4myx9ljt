class Solution {
    /**
     * @param {string} s
     * @param {string[]} dictionary
     * @return {number}
     */
    minExtraChar(s, dictionary) {
        const words = new Set(dictionary);
        const memo = new Map();

        const dfs = (i) => {
            if (i === s.length) {
                return 0;
            }
            if (memo.has(i)) return memo.get(i);

            let res = 1 + dfs(i + 1);
            for (let j = i; j < s.length; j++) {
                if (words.has(s.slice(i, j + 1))) {
                    res = Math.min(res, dfs(j + 1));
                }
            }

            memo.set(i, res);
            return res;
        };
        return dfs(0);
    }
}
