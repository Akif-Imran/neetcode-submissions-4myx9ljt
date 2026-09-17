class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const dfs = (curr, perms, set) => {
            if (curr.length === nums.length) {
                perms.push([...curr]);
                return perms;
            }

            for (let i = 0; i < nums.length; i++) {
                if (set.has(i)) continue;
                curr.push(nums[i]);
                set.add(i);
                dfs(curr, perms, set);
                curr.pop();
                set.delete(i);
            }
            return perms;
        };
        return dfs([], [], new Set());
    }
}
