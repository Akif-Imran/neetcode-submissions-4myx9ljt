class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const count1 = new Array(26).fill(0);
        const count2 = new Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            count1[s1.charCodeAt(i) - 97] += 1;
            count2[s2.charCodeAt(i) - 97] += 1;
        }
        if (count1.toString() === count2.toString()) return true;

        for (let r = s1.length; r < s2.length; r++) {
            count2[s2.charCodeAt(r) - 97]++;
            count2[s2.charCodeAt(r - s1.length) - 97]--;

            if (count1.toString() === count2.toString()) return true;
        }

        return false;
    }
}
