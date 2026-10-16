class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const LENGTH = nums.length;

        for (let l = 0; l < LENGTH; l++) {
            for (let r = l + 1; r <= Math.min(nums.length - 1, l + k); r++) {
                if (nums[l] === nums[r]) return true;
            }
        }
        return false;
    }
}
