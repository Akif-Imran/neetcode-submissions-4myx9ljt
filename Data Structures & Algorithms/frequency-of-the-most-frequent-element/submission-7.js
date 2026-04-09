class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    maxFrequency(nums, k) {
        nums.sort((a, b) => a - b);
        const LEN = nums.length;

        const prefix = new Array(LEN + 1).fill(0);
        for (let i = 0; i < LEN; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }

        let res = 1
        for (let i = 0; i < LEN; i++) {
            let left = 0;
            let right = i;

            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                const currSum = prefix[i + 1] - prefix[mid];
                const need = (i - mid + 1) * nums[i] - currSum;
                if (need <= k) {
                    right = mid - 1;
                    res = Math.max(res, i - mid + 1);
                } else {
                    left = mid + 1;
                }
            }
        }
        return res;
    }
}
