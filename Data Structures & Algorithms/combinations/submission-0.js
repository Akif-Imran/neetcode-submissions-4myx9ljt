class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const dfs = function (index, curr, combinations) {
            if (curr.length === k) {
                combinations.push([...curr]);
                return combinations;
            }
            if (index > n) return combinations;

            for (let i = index; i <= n; i++) {
                curr.push(i);
                dfs(i + 1, curr, combinations);
                curr.pop(); //backtacking
            }
            return combinations;
        };
        return dfs(1, [], []);
    }
}
