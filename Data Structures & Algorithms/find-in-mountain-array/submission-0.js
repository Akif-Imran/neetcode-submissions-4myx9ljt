/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *     @param {number} index
 *     @return {number}
 *     get(index) {
 *         ...
 *     }
 *
 *     @return {number}
 *     length() {
 *         ...
 *     }
 * }
 */

class Solution {
    /**
     * @param {number} target
     * @param {MountainArray} mountainArr
     * @return {number}
     */
    findInMountainArray(target, mountainArr) {
        const findMountain = (length) => {
            let l = 0;
            let r = length - 1;
            while (l <= r) {
                const mid = l + Math.floor((r - l) / 2);
                const value = mountainArr.get(mid);
                const leftVal = mid - 1 < 0 ? -Infinity : mountainArr.get(mid - 1);
                const rightVal = mid + 1 === length ? -Infinity : mountainArr.get(mid + 1);
                if (leftVal < value && value > rightVal) {
                    return mid;
                } else if (leftVal < value && value < rightVal) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            }
        };

        const n = mountainArr.length();
        const m_index = findMountain(n);
        let l = 0,
            r = n - 1;
        let res = [],
            index = Math.min(n, mountainArr.get(m_index) === target ? m_index : n);

        if (mountainArr.get(0) <= target) {
            //ascending arr binary search
            let L = 0;
            let R = m_index;

            while (L <= R) {
                const mid = L + Math.floor((R - L) / 2);
                const val = mountainArr.get(mid);
                if (val === target) {
                    index = Math.min(index, mid);
                    R = mid - 1;
                } else if (val < target) {
                    L = mid + 1;
                } else {
                    R = mid - 1;
                }
            }
        }
        if (index !== n) return index;

        //binary search right side (descending ordered array)
        let L = m_index;
        let R = n - 1;

        while (L <= R) {
            const mid = L + Math.floor((R - L) / 2);
            const val = mountainArr.get(mid);
            if (val === target) {
                index = Math.min(index, mid);
                R = mid - 1;
            } else if (val < target) {
                R = mid - 1;
            } else {
                L = mid + 1;
            }
        }

        return index == n ? -1 : index;
    }
}
