class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const res = [asteroids[0]];

        for (let i = 1; i < asteroids.length; i++) {
            const incomming = asteroids[i];
            if (incomming > 0) {
                res.push(incomming);
            } else {
                if (res[res.length - 1] < 0) res.push(incomming);
                else {
                    const abs = Math.abs(incomming);
                    let top = res[res.length - 1];
                    let last = res[res.length - 1];
                    while (abs >= top) {
                        if (abs === top) {
                            last = res.pop();
                            break;
                        } else last = res.pop();
                        top = res[res.length - 1];
                    }
                    if (abs > last) res.push(incomming);
                }
            }
        }
        return res;
    }
}
