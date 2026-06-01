class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    missingElement(nums, k) {
        const n = nums.length;
        const total = nums[n - 1] - nums[0] + 1;
        const missing = total - n;

        if (k > missing) {
            return nums[n - 1] + (k - missing);
        }

        let l = 0;
        let r = n - 1;
        while (l < r) {
            const mid = r - Math.floor((r - l) / 2);
            const miss = nums[mid] - nums[l] - 1;
            console.log(mid, nums[mid], miss);
            if (miss < k) {
                k -= miss;
                l = mid;
            } else {
                r = mid - 1;
            }
        }
        return nums[r] + k;
    }
}
