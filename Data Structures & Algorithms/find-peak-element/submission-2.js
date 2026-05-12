class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findPeakElement(nums) {
        const n = nums.length;
        if (n === 1) return 0;

        // if (n > 1 && nums[0] > nums[1]) return 0;
        // if (n > 1 && nums[n - 1] > nums[n - 2]) return n - 1;
        //if element is at 0 ...,[0 it's greater than the left part
        //only check right index
        //if element is at n-1 ...[...,0] it's greater than the right part
        //only check left index

        let l = 0;
        let r = n - 1;
        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);
            if (m > 0 && nums[m] < nums[m - 1]) {
                r = m - 1;
            } else if (m < n - 1 && nums[m] < nums[m + 1]) {
                l = m + 1;
            } else {
                return m;
            }
        }
        return l;
    }
}
