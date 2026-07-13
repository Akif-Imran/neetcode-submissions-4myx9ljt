class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */
    minOperations(logs) {
        let steps = 0;
        for (const log of logs) {
            if (log === "./") continue;
            if (log === "../") {
                if (steps > 0) steps -= 1;
            } else {
                steps += 1;
            }
        }
        return Math.max(0, steps);
    }
}
