class Solution {
    /**
     * @param {number[]} customers
     * @param {number[]} grumpy
     * @param {number} minutes
     * @return {number}
     */
    maxSatisfied(customers, grumpy, minutes) {
        //find the sub-array with the max value or 3 consecutive indicies
        //use the no. of minutes there  
        // I should not ask which sub-array has the max sum to be added?
        //instead which sub-array of size minutes has the max sum, while he is grumpy.
        const n = customers.length;
        const window = minutes;

        let satisfied = 0;
        for (let i = 0; i < n; i++) {
            if (grumpy[i] === 0) {
                satisfied += customers[i]
            }
        }

        let sum = 0, max_sum = 0;
        for (let r = 0; r < window; r++) {
            if (grumpy[r] === 1)
                sum += customers[r];
        }

        max_sum = sum + satisfied;

        let l = 0;
        for (let r = window; r < n; r++) {
            if (r - l + 1 >= window) {
                if (grumpy[l] === 1) sum -= customers[l];
                l++;
            }
            if (grumpy[r] === 1) sum += customers[r];
            max_sum = Math.max(max_sum, sum + satisfied);
        }
        return max_sum;
    }
}
