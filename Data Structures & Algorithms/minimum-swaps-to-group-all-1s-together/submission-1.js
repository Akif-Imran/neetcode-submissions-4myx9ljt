class Solution {
    /**
     * @param {number[]} data
     * @return {number}
     */
    minSwaps(data) {
        //[1,0,0,0,0,1,1,1]
        //k = freq of 1's
        //window that has minimum 0
        const freq = {};
        let k = 0;
        for (const num of data) {
            if (num === 1) k += 1;
        }
        if (k === 0) return 0;
        if (k === data.length) return 0;

        let res = k;
        let l = 0;
        for (let r = 0; r < data.length; r++) {
            if (!freq[data[r]]) freq[data[r]] = 0;
            freq[data[r]]++;

            if (r - l + 1 > k) {
                freq[data[l]]--;
                l += 1;
            }
            if (r - l + 1 === k) {
                res = Math.min(res, freq[0]);
            }
        }
        return res;
    }
}
