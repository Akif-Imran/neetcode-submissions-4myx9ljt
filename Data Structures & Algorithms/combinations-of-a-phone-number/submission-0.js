class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits === "") return [];
        const k = digits.length;
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
            if (curr.length === k) {
                combinations.push(curr.join(""));
                return combinations;
            }
            for (const c of map.get(digits[index])) {
                curr.push(c);
                console.log(curr);
                dfs(index + 1, curr, combinations);
                curr.pop();
            }
            return combinations;
        };
        return dfs(0, [], []);
    }
}
