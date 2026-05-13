class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {
        const canSplit = (largest) => {
            let subarray = 0;
            let currSum = 0;
            for (const n of nums) {
                currSum += n;
                if (currSum > largest) {
                    subarray += 1;
                    currSum = n;
                }
            }
            return subarray + 1 <= k;
        };

        let l = Math.max(...nums);
        let r = nums.reduce((sum, curr) => (sum += curr), 0);
        let res = r;

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);

            if (canSplit(mid)) {
                res = mid;
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return res;
    }
}
