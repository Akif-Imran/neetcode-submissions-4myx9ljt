class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {boolean}
     */
    isMajorityElement(nums, target) {
        const n = nums.length;
        if (n === 1 && nums[0] !== target) return false;

        let l = 0;
        let r = n - 1;

        while (l < r) {
            //find lower bound
            const mid = l + Math.floor((r - l) / 2);

            if (nums[mid] === target) {
                r = mid;
            } else if (nums[mid] > target) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        const higher = l + Math.floor(n / 2);
        if (higher < n && nums[higher] === target) return true;
        return false;
    }
}
