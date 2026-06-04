class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    searchRange(nums, target) {
        const n = nums.length;
        const res = new Array(2).fill(-1);

        let l = 0;
        let r = n - 1;

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            // console.log(l, mid, r);

            if (target === nums[mid]) {
                res[0] = mid;
                r = mid - 1;
            } else if (target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        l = 0;
        r = n - 1;
        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            // console.log(l, mid, r);

            if (target === nums[mid]) {
                res[1] = mid;
                l = mid + 1;
            } else if (target < nums[mid]) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return res;
    }
}
