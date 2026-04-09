class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    longestOnes(nums, k) {
        const n = nums.length;
        let res = 0, sum = 0;

        let l = 0;
        for (let r = 0; r < n; r++) {
            if (nums[r] === 0) sum++;
            while (sum > k) {
                if (nums[l] === 0) sum--;
                l++;
            }
            res = Math.max(res, r - l + 1);
        }
        return res;
    }
}
