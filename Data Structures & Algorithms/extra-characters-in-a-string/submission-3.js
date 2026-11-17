class Solution {
    /**
     * @param {string} s
     * @param {string[]} dictionary
     * @return {number}
     */
    minExtraChar(s, dictionary) {
        const words = new Set(dictionary);
        const n = s.length;
        const dp = new Array(n + 1).fill(-1);
        dp[n] = 0;

        const dfs = (i) => {
            if (dp[i] !== -1) return dp[i];
            let res = 1 + dfs(i + 1);
            for (let j = i; j < n; j++) {
                if (words.has(s.slice(i, j + 1))) {
                    res = Math.min(res, dfs(j + 1));
                }
            }
            dp[i] = res;
            return res;
        };

        return dfs(0);
    }
}