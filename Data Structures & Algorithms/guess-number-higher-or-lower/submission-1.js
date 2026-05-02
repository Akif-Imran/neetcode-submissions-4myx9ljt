/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * function guess(num) {}
 */

class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    guessNumber(n) {
        let num = 1;
        let mid = 1;
        while (num <= n) {
            mid = num + Math.floor((n - num) / 2);
            const res = guess(mid);
            if (res === 0) {
                return mid;
            } else if (res === 1) {
                num = mid + 1;
            } else {
                n = mid - 1;
            }
        }
        return mid;
    }
}
