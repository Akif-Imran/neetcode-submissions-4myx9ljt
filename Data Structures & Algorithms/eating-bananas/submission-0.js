class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1;
        let r = Math.max(...piles);
        let k = r;

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);

            let hours = 0;
            for (let i = 0; i < piles.length; i++) {
                hours += Math.ceil(piles[i] / mid);

                if (hours > h) {
                    break;
                }
            }
            if (hours > h) {
                l = mid + 1;
            } else {
                k = Math.min(k, mid);
                r = mid - 1;
            }
        }

        return k;
    }
}
