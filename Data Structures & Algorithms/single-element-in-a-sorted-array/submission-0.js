class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    singleNonDuplicate(nums) {
        let l = 0;
        let r = nums.length - 1;
        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            if (nums[mid] === nums[mid + 1]) {
                //mid is even?
                if (mid % 2 === 0) {
                    l = mid + 2;
                } else {
                    r = mid - 1;
                }
            } else if (nums[mid] === nums[mid - 1]) {
                //mid - 1 is even?
                if ((mid - 1) % 2 === 0) {
                    l = mid + 1;
                } else {
                    r = mid - 2;
                }
            } else {
                return nums[mid];
            }
        }
        return nums[l];
    }
}
