/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {

        const LENGTH = lists.length;
        if (LENGTH === 0) return null;
        if (LENGTH === 1) return lists[0];

        for (let i = 1; i < lists.length; i++) {
            lists[i] = mergeSortLists(lists[i - 1], lists[i]);
        }

        return lists[LENGTH - 1];
    }
}

const mergeSortLists = function (l1, l2) {
    const res = new ListNode(null, null);
    let ptr_res = res;
    while (l1 != null && l2 !== null) {
        if (l1.val <= l2.val) {
            ptr_res.next = l1
            l1 = l1.next;

        } else {
            ptr_res.next = l2
            l2 = l2.next;
        }
        ptr_res = ptr_res.next;
    }

    while (l1 !== null) {
        ptr_res.next = l1
        ptr_res = ptr_res.next;
        l1 = l1.next;
    }

    while (l2 !== null) {
        ptr_res.next = l2;
        ptr_res = ptr_res.next;
        l2 = l2.next;
    }
    return res.next;
}