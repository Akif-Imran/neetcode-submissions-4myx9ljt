class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const subsets = [];
        nums.sort();
        const dfs = function (i, curr) {
            if (i >= nums.length) {
                subsets.push([...curr]);
                return;
            }
            curr.push(nums[i]);
            dfs(i + 1, curr);
            curr.pop();
            while (i < nums.length && nums[i] === nums[i + 1]) i++;
            dfs(i + 1, curr);
        };
        dfs(0, []);
        return subsets;
    }
}
