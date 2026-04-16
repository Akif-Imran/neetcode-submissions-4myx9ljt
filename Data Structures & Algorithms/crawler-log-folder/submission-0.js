class Solution {
    /**
     * @param {string[]} logs
     * @return {number}
     */
    minOperations(logs) {
        let operations = 0;

        for (let i = 0; i < logs.length; i++) {
            if (logs[i] == "../") {
                if (operations > 0) operations -= 1;
            } else if (logs[i] === "./") {
                operations += 0;
            } else {
                operations += 1;
            }
        }
        return operations;
    }
}
