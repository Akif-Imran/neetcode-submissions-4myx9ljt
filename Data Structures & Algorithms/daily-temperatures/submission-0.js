class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const res = [];
        const output = new Array(n).fill(0);

        for (let i = n - 1; i >= 0; i--) {
            while (res.length > 0 && res[res.length - 1].value < temperatures[i]) {
                res.pop();
            }
            if (res.length > 0) output[i] = res[res.length - 1].index - i;
            else output[i] = 0;
            res.push({ value: temperatures[i], index: i });
        }
        return output;
    }
    //[(40,5),(36,3),(30,2)]
    //Time: 
    //Space: O(n);
}
