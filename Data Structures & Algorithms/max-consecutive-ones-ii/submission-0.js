class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {

        let l = 0;
        let maxOnes = 0;
        let count = 0;
        let flipable = true;
        let lastFlipedIndex = -1;
        for (let r = 0; r < nums.length; r++) {
            if (nums[r] === 1) {
                count++;
            } else if (nums[r] === 0 && flipable) {
                lastFlipedIndex = r;
                flipable = false;
                count++;
            } else {
                while (l !== lastFlipedIndex + 1) {
                    if (nums[l] === 1 || l === lastFlipedIndex) {
                        count--;
                    }
                    l++;
                }
                flipable = true;
                r--;
            }
            maxOnes = Math.max(maxOnes, count);
            //count: 1, 2, 3, 4, 3, 2, 
            // l: 0, 1
            //maxOnes: 1, 2, 3, 4, 
            //lastFlipedIndex: -1,  1, 1, 1, 
            //fliable: true, false, false, false, true, 
        }
        return maxOnes;
    }
}
