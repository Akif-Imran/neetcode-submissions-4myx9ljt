class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    missingNumber(arr) {
        const n = arr.length;

        let res = arr[n - 1];
        let l = 0;
        let r = n - 1;
        const d = (arr[n - 1] - arr[0]) / n;

        while (l < r) {
            const mid = l + Math.floor((r - l) / 2);
            const expected = arr[0] + mid * d;
            if (expected === arr[mid]) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        return arr[0] + l * d;
    }
}
