class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let res = [];
        const stack = [];
        let stack_ptr = -1;

        let l = 0;
        for (let r = 0; r < nums.length; r++) {
            while (stack.length > 0 && stack[stack_ptr] < nums[r]) {
                stack.pop();
                stack_ptr -= 1;
            }
            stack.push(nums[r]);
            stack_ptr += 1;

            if (r - l + 1 > k) {
                if (stack[0] === nums[l]) {
                    stack.shift();
                    stack_ptr -= 1;
                }
                l += 1;
            }
            if (r - l + 1 === k) {
                res.push(stack[0]);
            }
        }
        return res;
    }
}
