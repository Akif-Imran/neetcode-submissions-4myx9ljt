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
                if (Math.abs(a) > stack[stack.length - 1]) {
                    stack.pop();
                } else if (Math.abs(a) === stack[stack.length - 1]) {
                    stack.pop();
                    push = false;
                    break;
                } else {
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
