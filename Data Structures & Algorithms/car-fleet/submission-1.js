class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const n = position.length;
        const arr = new Array(n).fill();
        for (let i = 0; i < position.length; i++) {
            arr[i] = { pos: position[i], speed: speed[i] };
        }
        arr.sort((a, b) => b.pos - a.pos);

        const stack = [];
        for (let i = 0; i < arr.length; i++) {
            const time = (target - arr[i].pos) / arr[i].speed;
            stack.push(time);
            while (stack.length >= 2 && stack.at(-1) <= stack.at(-2)) {
                stack.pop();
            }
            console.log(stack);
        }
        return stack.length;
    }
}
