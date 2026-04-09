/**
 * Pair class to store key-value pairs
 */
// class Pair {
//     /**
//      * @param {number} key The key to be stored in the pair
//      * @param {string} value The value to be stored in the pair
//      */
//     constructor(key, value) {
//         this.key = key;
//         this.value = value;
//     }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        if (pairs.length === 0) return []
        const res = [];
        for (let i = 1; i < pairs.length; i++) {
            let j = i - 1;
            res.push(pairs.slice(0, pairs.length))
            while (j >= 0 && pairs[j + 1].key < pairs[j].key) {
                let temp = pairs[j + 1];
                pairs[j + 1] = pairs[j];
                pairs[j] = temp;
                j--;
            }
        }
        res.push(pairs.slice(0, pairs.length))
        return res;
    }
}











