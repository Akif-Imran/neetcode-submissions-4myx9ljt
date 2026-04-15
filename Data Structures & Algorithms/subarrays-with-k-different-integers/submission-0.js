class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraysWithKDistinct(nums, k) {
        const atMostK = function (limit) {
            if (limit < 0) return 0;
            const n = nums.length;
            const map = new Map();

            console.log(n, map, limit, nums);
            let res = 0;
            let l = 0;
            for (let r = 0; r < n; r++) {
                map.set(nums[r], (map.get(nums[r]) || 0) + 1);
                while (map.size > limit) {
                    let val = map.get(nums[l]);
                    if (val === 1) map.delete(nums[l]);
                    else map.set(nums[l], val - 1);
                    l += 1;
                }
                res += (r - l + 1);
            }
            return res;
        }
        return atMostK(k) - atMostK(k - 1);
    }
}
