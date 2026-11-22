class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const dfs = function (i, curr, subsets) {
            if (i >= nums.length) {
                subsets.push([...curr]);
                return;
            }
            curr.push(nums[i]);
            dfs(i + 1, curr, subsets);
            curr.pop();
            dfs(i + 1, curr, subsets);
        };
        const res = [];
        dfs(0, [], res);
        return res;
    }
}
