class Solution {
    /**
     * @param {number[]} nums
     * @param {number} p
     * @return {number}
     */

    canHavePairs(nums, threshold) {
        let pairs = 0;
        let i = 0;
        while (i < nums.length - 1) {
            const diff = Math.abs(nums[i + 1] - nums[i]);
            if (diff <= threshold) {
                pairs += 1;
                i += 1;
            }
            i += 1;
        }
        return pairs;
    }
    minimizeMax(nums, p) {
        nums.sort((a, b) => a - b);
        const n = nums.length;
        let l = 0;
        let r = nums[n - 1] - nums[0];
        let res = r;

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            const pairs = this.canHavePairs(nums, mid);
            // console.log(possible, l, mid, r);
            if (pairs >= p) {
                res = Math.min(res, mid);
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return res;
    }
}
