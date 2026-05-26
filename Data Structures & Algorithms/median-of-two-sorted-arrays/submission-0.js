class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const nums = nums1.concat(nums2);
        nums.sort((a, b) => a - b);
        const len = nums.length;

        let l = 0;
        let r = len - 1;
        const mid = l + Math.floor((r - l) / 2);

        if (len % 2 == 1) return nums[mid];
        return (nums[mid] + nums[mid + 1]) / 2;
    }
}
