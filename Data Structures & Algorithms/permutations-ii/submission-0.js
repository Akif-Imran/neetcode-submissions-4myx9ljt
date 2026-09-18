class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        const backtrack = function (i, nums) {
            if (i >= nums.length) {
                return [[]];
            }
            const res = [];
            const perms = backtrack(i + 1, nums);
            const set = new Set();
            for (const p of perms) {
                for (let j = 0; j < p.length + 1; j++) {
                    const cp = [...p];
                    cp.splice(j, 0, nums[i]);
                    const sv = cp.join("");
                    if (set.has(sv)) continue;
                    set.add(sv);
                    res.push(cp);
                }
            }
            return res;
        };
        return backtrack(0, nums);
    }
}
