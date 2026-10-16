class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    subsetXORSum(nums) {
        const n = nums.length;
        let res = 0;
        for (const n of nums) {
            res |= n;
        }
        return res << (n - 1);
    }
}
