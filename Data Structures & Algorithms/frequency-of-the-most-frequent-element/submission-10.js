class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    maxFrequency(nums, k) {
        nums.sort((a, b) => b - a);

        const n = nums.length;
        let l = 0;
        let res = 0,
            sum = 0;
        for (let r = 0; r < n; r++) {
            while (nums[l] - nums[r] > k) {
                const req_old = nums[l] * (r - l) - sum;
                sum -= nums[l];
                l += 1;
                const req_new = nums[l] * (r - l) - sum;
                k += req_old - req_new;
            }
            sum += nums[r];
            k -= nums[l] - nums[r];
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
