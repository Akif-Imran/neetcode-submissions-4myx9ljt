class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operators = new Set(["+", "-", "*", "/"]);

        for (let i = 0; i < tokens.length; i++) {
            if (operators.has(tokens[i])) {
                const v2 = stack.pop();
                const v1 = stack.pop();
                let res = 0;
                switch (tokens[i]) {
                    case "+":
                        res = v1 + v2;
                        break;
                    case "-":
                        res = v1 - v2;
                        break;
                    case "*":
                        res = v1 * v2;
                        break;
                    case "/":
                        res = Math.trunc(v1 / v2);
                        break;
                }
                stack.push(res);
            } else {
                stack.push(parseInt(tokens[i], 10));
            }
        }
        return stack[0];
    }
}
