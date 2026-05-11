class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    missingNumber(arr) {
        const n = arr.length;

        // const curr = (n * (arr[0] + arr[n - 1])) / 2;
        // const was = ((n + 1) * (arr[0] + arr[n - 1])) / 2;

        return Math.ceil(((n + 1) * (arr[0] + arr[n - 1])) / 2 - (n * (arr[0] + arr[n - 1])) / 2);
    }
}
