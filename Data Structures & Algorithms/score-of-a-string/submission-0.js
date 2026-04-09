class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {
        let accu = 0;
        for (let i = s.length - 2; i >= 0; i--) {
            const current = s.charCodeAt(i);
            const previous = s.charCodeAt(i + 1);
            accu += Math.abs(previous - current);
        }
        return accu;
    }
}
