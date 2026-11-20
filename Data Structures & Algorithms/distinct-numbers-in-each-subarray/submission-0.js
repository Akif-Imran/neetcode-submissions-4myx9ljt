class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    distinctNumbers(nums, k) {
        const n = nums.length;
        const ans = [];
        const freq = {};
        let distinct = 0;

        let l = 0;
        for (let r = 0; r < n; r++) {
            if (!freq[nums[r]]) {
                freq[nums[r]] = 0;
                distinct += 1;
            }
            freq[nums[r]]++;

            if (r - l + 1 > k) {
                if (--freq[nums[l]] === 0) distinct -= 1;
                l += 1;
            }

            if (r - l + 1 === k) {
                ans.push(distinct);
            }
        }
        return ans;
    }
}
