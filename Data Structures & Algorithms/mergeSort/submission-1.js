/** Pair class to store key-value pairs */
// class Pair {
//   /**
//    * @param {number} key The key to be stored in the pair
//    * @param {string} value The value to be stored in the pair
//    */
//   constructor(key, value) {
//       this.key = key;
//       this.value = value;
//   }
// }
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[]}
     */
    mergeSort(pairs) {
        if (pairs.length === 0) return [];
        const mergeSortList = function (list, L, R) {
            if (L === R) return list;

            const M = Math.floor((L + R) / 2);
            mergeSortList(list, L, M);
            mergeSortList(list, M + 1, R);
            return merge(list, L, M, R);
        };

        const merge = function (list, L, M, R) {
            const left = list.slice(L, M + 1);
            const right = list.slice(M + 1, R + 1);

            let i = L,
                li = 0,
                ri = 0;

            while (li < left.length && ri < right.length) {
                if (left[li].key <= right[ri].key) {
                    list[i] = left[li];
                    li += 1;
                } else {
                    list[i] = right[ri];
                    ri += 1;
                }
                i += 1;
            }

            while (li < left.length) {
                list[i] = left[li];
                li += 1;
                i += 1;
            }

            while (ri < right.length) {
                list[i] = right[ri];
                ri += 1;
                i += 1;
            }
            return list;
        };
        console.log(pairs[0], pairs.length, pairs[0].key);
        return mergeSortList(pairs, 0, pairs.length - 1);
    }
}
