class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    maxFrequency(nums, k) {
        nums.sort((a, b) => a - b);
        const n = nums.length;
        const prefix = new Array(n + 1).fill(0);


        for (let i = 0; i < n; i++) {
            prefix[i + 1] = prefix[i] + nums[i];
        }

        console.log(prefix);
        // return 0;
        let l = 0;
        let res = 1;

        for (let r = 0; r < n; r++) {
            let left = 0,
                right = r;
            while (left <= right) {
                const mid = Math.floor((left + right) / 2);
                const currSum = prefix[r + 1] - prefix[mid];
                const need = (r - mid + 1) * nums[r] - currSum;
                if (need <= k) {
                    right = mid - 1;
                    res = Math.max(res, r - mid + 1);
                } else {
                    left = mid + 1;
                }
            }

        }
        return res;
    }
}
