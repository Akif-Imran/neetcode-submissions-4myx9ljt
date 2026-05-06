class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    search(nums, target) {
        const n = nums.length;
        let l = 0;
        let r = n - 1;

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);

            if (target === nums[mid]) {
                return true;
            } else if (nums[l] < nums[mid]) {
                if (target >= nums[l] && target < nums[mid]) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            } else if (nums[l] > nums[mid]) {
                if (target <= nums[r] && target > nums[mid]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            } else {
                l += 1; //O(n)
            }
        }
        return false;
    }
}
