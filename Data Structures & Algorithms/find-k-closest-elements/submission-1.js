class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let res = []
        const LEN = arr.length;
        if (arr[LEN - 1] < x) {
            for (let i = LEN - k; i < LEN; i++) {
                res.push(arr[i]);
            }
            return res;
        }
        if (arr[0] > x) {
            for (let i = 0; i < k; i++) {
                res.push(arr[i]);
            }
            return res;
        }



        let l = 0;
        for (let r = k; r < arr.length; r++) {
            let right = Math.abs(arr[r] - x);
            let left = Math.abs(arr[l] - x);
            if (right < left) {
                l++;
            } else if (right === left) {
                res = arr.slice(l, r);
            }
        }
        return res;
    }
}
