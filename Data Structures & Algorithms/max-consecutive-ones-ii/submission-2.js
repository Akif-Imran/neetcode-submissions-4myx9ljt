class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {

        let countZeros = 0;
        let l = 0;
        let max = 0;
        for (let r = 0; r < nums.length; r++) {
            if (nums[r] === 0) {
                countZeros++;
            }
            while (countZeros > 1) {
                if (nums[l] === 0) countZeros--;
                l++;
            }
            max = Math.max(max, r - l + 1);
        }
        return max;
    }
}
