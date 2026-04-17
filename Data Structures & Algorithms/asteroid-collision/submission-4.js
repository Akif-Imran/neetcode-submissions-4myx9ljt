class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const res = [];

        for (let ast of asteroids) {
            let shouldPush = true;

            while (res.length > 0 && ast < 0 && res[res.length - 1] > 0) {
                const top = res[res.length - 1];

                if (Math.abs(ast) > top) {
                    res.pop();
                } else if (Math.abs(ast) < top) {
                    shouldPush = false;
                    break;
                } else {
                    res.pop();
                    shouldPush = false;
                    break;
                }
            }
            if (shouldPush) {
                res.push(ast);
            }
        }
        return res;
    }
}
