class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {string}
     */
    getHappyString(n, k) {
        let count = 0,
            ans = "";
        const dfs = (path) => {
            if (path.length === n) {
                if (++count === k) {
                    ans = path.join("");
                    return true;
                }
                return false;
            }

            for (const l of ["a", "b", "c"]) {
                if (path.at(-1) === l) continue;
                path.push(l);
                if (dfs(path)) return true;
                path.pop();
            }
            return false;
        };
        dfs([]);
        return ans;
    }
}
