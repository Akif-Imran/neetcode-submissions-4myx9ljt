class Solution {
    /**
     * @param {number[]} nums
     * @param {number} goal
     * @return {number}
     */
    numSubarraysWithSum(nums, goal) {
        const n = nums.length;
        const helper = (x) => {
            if (x < 0) return 0;
            let l = 0, res = 0, sum = 0;

            for (let r = 0; r < n; r++) {
                sum += nums[r];
                while (sum > x) {
                    sum -= nums[l];
                    l++;
                }
                res += r - l + 1;
            }
            return res;
        }
        return helper(goal) - helper(goal - 1);
    }
}
