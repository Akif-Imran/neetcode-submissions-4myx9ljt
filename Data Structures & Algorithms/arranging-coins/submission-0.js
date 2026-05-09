class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    arrangeCoins(n) {
        let l = 1;
        let r = n;

        while (l <= r) {
            const stairs = l + Math.floor((r - l) / 2);
            const req_coins = (stairs * (stairs + 1)) / 2;

            if (req_coins === n)
                return stairs; //completed staris
            else if (req_coins < n) {
                l = stairs + 1;
            } else {
                r = stairs - 1;
            }
        }

        return l - 1; //becaue binary returns
    }
}
