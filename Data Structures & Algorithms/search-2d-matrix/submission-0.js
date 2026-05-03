class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length;
        const cols = matrix[0].length;

        let l = 0;
        let r = rows * cols - 1;

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            const pred = matrix[Math.floor(mid / cols)][mid % cols];
            if (target === pred) {
                return true;
            } else if (target > pred) {
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        return false;
    }
}
