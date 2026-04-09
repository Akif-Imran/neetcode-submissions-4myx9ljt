class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {

        let l = 0;
        let maxOnes = 0;
        let count = 0;
        let lastFlipedIndex = -1;
        for (let r = 0; r < nums.length; r++) {
            if (nums[r] === 1) {
                count++;
            } else {
                if (lastFlipedIndex === -1) {
                    lastFlipedIndex = r;
                    count++;
                } else {
                    while (l !== lastFlipedIndex + 1) {
                        count--;
                        l++;
                    }
                    lastFlipedIndex = r;
                }
            }
            maxOnes = Math.max(maxOnes, count);
        }
        return maxOnes;
    }
}
