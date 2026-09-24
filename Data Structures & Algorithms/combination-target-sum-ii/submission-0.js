class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);

        const dfs = (i, sum, path, res) => {
            if (sum === target) {
                res.push([...path]);
                return res;
            }
            if (i >= candidates.length || sum > target) return res;

            path.push(candidates[i]);
            dfs(i + 1, sum + candidates[i], path, res);
            path.pop();
            while (i < candidates.length && candidates[i] === candidates[i + 1]) {
                i += 1;
            }
            dfs(i + 1, sum, path, res);

            return res;
        };
        return dfs(0, 0, [], []);
    }
}
