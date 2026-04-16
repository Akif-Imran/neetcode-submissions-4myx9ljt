class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const res = [];

        for (let i = 0; i < operations.length; i++) {
            switch (operations[i]) {
                case "+":
                    res.push(res[res.length - 1] + res[res.length - 2]);
                    break;
                case "D":
                    res.push(res[res.length - 1] * 2);
                    break;
                case "C":
                    res.pop();
                    break;
                default:
                    res.push(parseInt(operations[i], 10));
                    break;
            }
        }

        let sum = 0;
        for (let i = 0; i < res.length; i++) {
            sum += res[i];
        }
        return sum;
    }
}
