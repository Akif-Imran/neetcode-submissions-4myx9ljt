class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const map = new Map([
            ["2", "abc"],
            ["3", "def"],
            ["4", "ghi"],
            ["5", "jkl"],
            ["6", "mno"],
            ["7", "pqrs"],
            ["8", "tuv"],
            ["9", "wxyz"],
        ]);
        const dfs = function (index, curr, combinations) {
            if (curr.length === digits.length) {
                combinations.push(curr);
                return combinations;
            }
            for (const c of map.get(digits[index])) {
                dfs(index + 1, curr + c, combinations);
            }
            return combinations;
        };
        if (digits.length === 0) return [];
        return dfs(0, "", []);
    }
}
