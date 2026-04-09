class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {

        let count = 0;
        let accum = 0;
        for (let i = 0; i < k; i++) {
            accum += arr[i];
        }
        if (accum >= threshold * k) count++;
        for (let r = k; r < arr.length; r++) {
            accum += arr[r];
            accum -= (arr[r - k] || 0);
            if (accum >= threshold * k) {
                count++;
            }
        }
        return count;
    }
}
