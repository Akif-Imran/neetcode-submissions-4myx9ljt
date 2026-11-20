class Solution {
    dietPlanPerformance(calories, k, lower, upper) {
        const n = calories.length;
        let total = 0,
            sum = 0;

        for (let r = 0; r < k; r++) {
            sum += calories[r];
        }
        if (sum < lower) total -= 1;
        else if (sum > upper) total += 1;

        let l = 0;
        for (let r = k; r < n; r++) {
            sum = sum + calories[r] - calories[r - k];
            if (sum < lower) total -= 1;
            else if (sum > upper) total += 1;
        }
        return total;
    }
}
