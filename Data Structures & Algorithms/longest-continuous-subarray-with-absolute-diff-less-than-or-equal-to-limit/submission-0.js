class Solution {
    /**
     * @param {number[]} nums
     * @param {number} limit
     * @return {number}
     */
    longestSubarray(nums, limit) {
        let res = 0;

        const max_deque = [];
        let ptr_max_deque = 0;

        const min_deque = [];
        let ptr_min_deque = 0;

        let l = 0;
        for (let r = 0; r < nums.length; r++) {
            while (max_deque.length > ptr_max_deque && nums[r] > max_deque[max_deque.length - 1]) {
                max_deque.pop();
            }
            max_deque.push(nums[r]);
            console.log("max: ", max_deque, ptr_max_deque, nums.slice(l, r + 1));

            while (min_deque.length > ptr_min_deque && nums[r] < min_deque[min_deque.length - 1]) {
                min_deque.pop();
            }
            min_deque.push(nums[r]);
            console.log("min: ", min_deque, ptr_min_deque, nums.slice(l, r + 1));

            // const diff = max_deque[ptr_max_deque] - min_deque[ptr_min_deque];
            while (max_deque[ptr_max_deque] - min_deque[ptr_min_deque] > limit) {
                if (nums[l] === max_deque[ptr_max_deque]) ptr_max_deque += 1;
                if (nums[l] === min_deque[ptr_min_deque]) ptr_min_deque += 1;
                l += 1;
            }

            console.log("curr: ", nums.slice(l, r + 1));
            res = Math.max(res, r - l + 1);
        }
        return res;
        //deque
        //[8,4,2,4,7]
        //[8,4,4,<-7]
        //[2,4,7]
    }
}
