class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        const INIT = nums.length + 1;
        let length = INIT;
        let sum = 0;
        let l = 0;

        for (let r = 0; r < nums.length; r++) {
            sum += nums[r];
            while (sum >= target) {
                length = Math.min(length, r - l + 1)
                sum -= nums[l];
                l++;
            }
        }
        return length === INIT ? 0 : length;
    }
}
