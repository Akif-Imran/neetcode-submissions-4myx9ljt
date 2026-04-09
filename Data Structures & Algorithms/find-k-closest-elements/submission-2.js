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
        else if (arr[0] > x) {
            for (let i = 0; i < k; i++) {
                res.push(arr[i]);
            }
            return res;
        } else {
            for (let i = 0; i < k; i++) {
                res.push(arr[i]);
            }
            let l = 0;
            for (let r = k; r < LEN; r++) {
                let right = Math.abs(arr[r] - x);
                let left = Math.abs(arr[l] - x);
                console.log(left, right);
                if (right < left) {
                    res.shift()
                    res.push(arr[r])
                    l += 1
                } else if (right === left) {
                    break;
                }
            }
            return res;
        }




    }
}
