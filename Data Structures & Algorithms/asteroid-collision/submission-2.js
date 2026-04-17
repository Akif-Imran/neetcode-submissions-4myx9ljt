class Solution {
    /**
     * @param {number[]} asteroids
     * @return {number[]}
     */
    asteroidCollision(asteroids) {
        const res = [asteroids[0]];

        for (let i = 1; i < asteroids.length; i++) {
            let incomming = asteroids[i];
            if (incomming > 0) {
                res.push(incomming);
            } else {
                if (res.length === 0 || res[res.length - 1] < 0) res.push(incomming);
                else {
                    let push = true;
                    do {
                        let diff = incomming + res[res.length - 1];
                        console.log(incomming, res[res.length - 1], diff);
                        if (diff < 0) {
                            res.pop();
                        } else if (diff > 0) {
                            push = false;
                        } else {
                            res.pop();
                            push = false;
                        }
                    } while (push);
                    if (push) {
                        res.push(incomming);
                    }
                }
            }
        }
        return res;
    }
}
