class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    maxFrequency(nums, k) {
        const LEN = nums.length;
        nums.sort((a, b) => a - b);
        let res = 0;

        for (let i = LEN - 1; i >= 0; i--) {
            let budget = k;
            let j = i - 1;
            while (j >= 0 && budget - (nums[i] - nums[j]) >= 0) {
                budget = budget - (nums[i] - nums[j]);
                j--;
            }
            res = Math.max(res, i - j);
        }
        //LEN =     4,4, 4
        // i =      3,3, 3
        // j =      2,1, 0
        //budget =5,0,-9,-9,
        //res =     0,0,
        //


        return res;
    }
}
