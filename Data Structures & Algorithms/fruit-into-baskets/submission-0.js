class Solution {
    /**
     * @param {number[]} fruits
     * @return {number}
     */
    totalFruit(fruits) {
        const map = new Map();
        let res = 0;
        let l = 0;
        let distinct = 0;

        for (let r = 0; r < fruits.length; r++) {
            map.set(fruits[r], (map.get(fruits[r]) || 0) + 1);
            console.log(map);
            while (map.size > 2) {
                let val = map.get(fruits[l]);
                if (val === 1) {
                    map.delete(fruits[l]);
                } else {
                    map.set(fruits[l], val - 1);
                }
                l++;
            }
            res = Math.max(res, r - l + 1);
            console.log(map, res);
        }
        return res;
    }
}
