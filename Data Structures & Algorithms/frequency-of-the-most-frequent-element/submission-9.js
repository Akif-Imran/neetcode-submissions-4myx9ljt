class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    maxFrequency(nums, k) {
        nums.sort((a, b) => a - b);
        const LEN = nums.length;

        let l = 0, total = 0, res = 0;
        for (let r = 0; r < LEN; r++) {
            total += nums[r];

            while (nums[r] * (r - l + 1) > total + k) {
                total -= nums[l];
                l++;
            }
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
