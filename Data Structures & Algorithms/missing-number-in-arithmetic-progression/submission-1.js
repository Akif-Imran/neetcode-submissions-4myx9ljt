class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    missingNumber(arr) {
        const n = arr.length;
        let d = arr.at(-1);
        if (arr[n - 1] < arr[0]) arr.reverse();
        for (let i = 0; i < n - 1; i++) {
            d = Math.min(d, Math.abs(arr[i + 1] - arr[i]));
        }
        console.log(d);

        let res = arr.at(-1);
        for (let i = 1; i < n; i++) {
            const next = arr[0] + i * d;
            console.log(next, arr[i], i, d);
            if (arr[i] !== next) {
                res = next;
                break;
            }
        }
        return res;
    }
}
