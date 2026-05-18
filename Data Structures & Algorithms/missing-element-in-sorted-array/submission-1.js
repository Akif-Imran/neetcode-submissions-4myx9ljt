class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    missingElement(nums, k) {
        //[4,5,6,7,8,9,10]
        //7-4 = 3 // 9 - 4 = 5 - 2(index) = 3
        //l + 3 === mid?
        const missing_values = nums.at(-1) - (nums[0] - 1) - nums.length;
        if (missing_values < k) {
            k -= missing_values;
            return nums.at(-1) + k;
        }

        const n = nums.length;
        let l = 0;
        let r = n - 1;
        let res = 0;

        while (l < r) {
            const mid = l + Math.floor((r - l) / 2);

            let missing = nums[mid] - nums[l]; //take -1 for the actual nums[l]
            missing = missing - (mid - l);
            console.log(nums[l], nums[mid], nums[r], missing, k);
            if (nums[l + 1] === nums[r]) {
                res = nums[l] + k;
                break;
            } else if (missing >= k) {
                r = mid;
            } else {
                k -= missing;
                l = mid;
            }
        }
        return res;
    }
}
