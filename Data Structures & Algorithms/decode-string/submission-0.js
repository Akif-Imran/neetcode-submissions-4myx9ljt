class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const stack = [];
        let currNum = 0;

        for (let i = 0; i < s.length; i++) {
            const ch = s.charCodeAt(i);
            if (ch > 47 && ch < 58) {
                currNum = currNum * 10 + parseInt(s[i]);
            } else if (ch === 91) {
                stack.push(currNum);
                currNum = 0;
                stack.push(s[i]);
            } else if (ch > 96 && ch < 123) {
                stack.push(s[i]);
            } else {
                let str = "";
                while (stack.length > 0 && stack.at(-1) !== "[") {
                    str = stack.pop() + str;
                }
                stack.pop();
                stack.push(str.repeat(stack.pop()));
            }
        }
        return stack.join("");
    }
}
