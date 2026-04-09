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
        const state = []
        for (let r = 0; r < pairs.length; r++) {
            let l = r - 1;
            while (l >= 0 && pairs[l].key > pairs[l + 1].key) {
                let temp = pairs[l + 1];
                pairs[l + 1] = pairs[l];
                pairs[l] = temp;
                l -= 1;
            }
            state.push([...pairs]);
        }
        return state;
    }
}
