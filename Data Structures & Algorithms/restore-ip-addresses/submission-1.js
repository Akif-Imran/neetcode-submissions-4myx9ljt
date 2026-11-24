class Solution {
    /**
     * @param {string} s
     * @return {string[]}
     */
    restoreIpAddresses(s) {
        const n = s.length;
        if (n < 4 || n > 12) return [];
        const res = [];

        const isValid = (start, end = n) => {
            const str = s.slice(start, end);
            if (str.length === 0 || str.length > 3) return false;
            if (str.length > 1 && str[0] === "0") return false;
            return Number(str) <= 255;
        };

        const dfs = (idx, dots, sec) => {
            const remaining = n - idx;
            const partsLeft = dots + 1;
            if (remaining < partsLeft || remaining > 3 * partsLeft) return;

            if (sec.length === 3) {
                if (!isValid(idx)) return;
                const point = ".";
                const ip =
                    s.slice(0, sec[0]) +
                    point +
                    s.slice(sec[0], sec[1]) +
                    point +
                    s.slice(sec[1], sec[2]) +
                    point +
                    s.slice(sec[2]);
                res.push(ip);
                return;
            }

            for (const digit of [3, 2, 1]) {
                if (idx + digit >= n) continue;
                if (!isValid(idx, idx + digit)) continue;

                sec.push(idx + digit);
                dfs(idx + digit, dots - 1, sec);
                sec.pop();
            }
            return;
        };

        dfs(0, 3, []);
        return res;
    }
}
