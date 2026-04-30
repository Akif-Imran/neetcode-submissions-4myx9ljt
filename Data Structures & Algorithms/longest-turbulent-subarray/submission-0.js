class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    maxTurbulenceSize(arr) {
        if (arr.length === 1) return 1;
        const signs = [];
        let res = 0;
        for (let r = 0; r + 1 < arr.length; r++) {
            if (arr[r] > arr[r + 1]) {
                signs.push(">");
            } else if (arr[r] < arr[r + 1]) {
                signs.push("<");
            } else {
                signs.push("=");
            }
        }
        // console.log(signs);
        let l = 0;
        for (let r = 0; r < signs.length; r++) {
            if (signs[r] == "=") {
                l = r + 1;
            } else if (signs[r] === signs[r - 1]) {
                l = r;
            }
            res = Math.max(res, r - l + 1);
        }
        return res + 1;
    }
}
