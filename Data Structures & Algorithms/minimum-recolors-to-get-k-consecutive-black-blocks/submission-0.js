class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {

        let min = blocks.length + 1;
        let repaints = 0;
        for (let i = 0; i < k; i++) {
            if (blocks[i] === 'W') repaints += 1;
        }
        min = Math.min(min, repaints);


        for (let r = k; r < blocks.length; r += 1) {
            if (blocks[r - k] === "W") {
                repaints -= 1;
            }
            if (blocks[r] === 'W') {
                repaints += 1;
            }
            min = Math.min(min, repaints);
        }

        return min;
    }
}
