class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    minimumDifference(nums, k) {
        let ans = Infinity;
        nums.sort((a, b) => a - b);

        for (let i = 0; i + k <= nums.length; i++) {
            ans = Math.min((nums[i + k - 1] - nums[i]), ans);
        }

        return ans;
    }
}
