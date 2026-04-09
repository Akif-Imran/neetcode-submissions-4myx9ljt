class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    numSubarrayProductLessThanK(nums, k) {
        let res = 0;
        let prod = 1;

        let l = 0;
        for (let r = 0; r < nums.length; r++) {
            if (nums[r] < k) res++;
            prod *= nums[r];
            while (prod >= k) {
                prod /= nums[l];
                l++;
            }
            if (prod < k) {
                res++;
            }
        }
        return res;
    }
}
