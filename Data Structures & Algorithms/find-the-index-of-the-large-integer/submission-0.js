/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *     // Compares the sum of arr[l..r] with the sum of arr[x..y]
 *     // return 1 if sum(arr[l..r]) > sum(arr[x..y])
 *     // return 0 if sum(arr[l..r]) == sum(arr[x..y])
 *     // return -1 if sum(arr[l..r]) < sum(arr[x..y])
 *     @param {number} l, r, x, y
 *     @return {number}
 *     this.compareSub = function(l, r, x, y) {
 *         ...
 *     };
 *
 *     // Returns the length of the array
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

class Solution {
    /**
     * @param {ArrayReader} reader
     * @return {number}
     */
    getIndex(reader) {
        const n = reader.length();

        let l = 0;
        let len = n;

        while (len > 1) {
            len = Math.floor(len / 2);

            const res = reader.compareSub(l, l + len - 1, l + len, l + 2 * len - 1);
            console.log(l, l + len - 1, l + len, l + 2 * len - 1);
            if (res === 0) {
                return l + len + len;
            }
            if (res < 0) {
                l += len;
            }
        }
        return l;
    }
}
