class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        const dfs = function (i, sum, path) {
            if (sum === target) {
                res.push([...path]);
                return;
            }

            if (i >= nums.length || sum > target) return;

            path.push(nums[i]);
            dfs(i, sum + nums[i], path);
            path.pop();
            dfs(i + 1, sum, path);
            return;
        };
        dfs(0, 0, []);
        return res;
    }
}
