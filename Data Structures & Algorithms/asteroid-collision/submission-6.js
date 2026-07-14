class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const stack = [];
        for (const a of asteroids) {
            let push = true;
            while (stack.length !== 0 && a < 0 && stack[stack.length - 1] > 0) {
                const a_abs = Math.abs(a);
                const top = stack[stack.length - 1];
                if (a_abs > top) {
                    stack.pop();
                } else if (a_abs < top) {
                    push = false;
                    break;
                } else {
                    stack.pop();
                    push = false;
                    break;
                }
            }
            if (push) {
                stack.push(a);
            }
        }
        return stack;
    }
}
