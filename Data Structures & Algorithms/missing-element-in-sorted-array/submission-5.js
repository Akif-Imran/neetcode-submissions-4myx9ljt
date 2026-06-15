class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    missingElement(nums, k) {
        //find number of elements missing in array 'me'
        //if k is less than 'me' it exists within the array otherwise it's outside to the right
        //increase array[-1] + (k - missing in array)
        //if inside the array
        //find value using binary search
        //decision to go left or right is based on missing elemnts before mid

        const n = nums.length;
        let missing = nums[n - 1] - (nums[0] - 1) - n; // 10 - 4 = 6
        console.log(missing);
        if (k > missing) {
            return nums[n - 1] + (k - missing);
        }

        let l = 0;
        let r = n - 1;

        while (l < r) {
            const mid = r - Math.floor((r - l) / 2);
            missing = nums[mid] - (nums[l] - 1);
            missing -= mid - l + 1; //minus length
            if (missing >= k) {
                r = mid - 1;
            } else {
                l = mid;
                k -= missing;
            }
        }
        return nums[l] + k;
    }
}
