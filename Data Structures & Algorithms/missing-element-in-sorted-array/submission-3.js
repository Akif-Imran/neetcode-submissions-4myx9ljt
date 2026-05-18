class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    missingElement(nums, k) {
        //[4,5,6,7,8,9,10]
        //7-4 = 3 // 9 - 4 = 5 - 2(index) = 3
        //l + 3 === mid

        const n = nums.length;
        let l = 0;
        let r = n - 1;

        while (l < r) {
            const mid = r - Math.floor((r - l) / 2);

            let missing = nums[mid] - nums[0] - mid; //take -1 for the actual nums[l]
            if (missing < k) {
                l = mid;
            } else {
                r = mid - 1;
            }
        }
        return nums[0] + l + k;
    }
}
