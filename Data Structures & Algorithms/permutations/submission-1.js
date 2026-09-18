class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const backtrack = function (curr, perms, set) {
            if (curr.length == nums.length) {
                perms.push([...curr]);
                return perms;
            }

            for (let i = 0; i < nums.length; i++) {
                if (set.has(i)) continue;

                curr.push(nums[i]);
                set.add(i);
                backtrack(curr, perms, set);
                curr.pop(); //backtrack
                set.delete(i);
            }
            return perms;
        };
        return backtrack([], [], new Set());
    }
}
