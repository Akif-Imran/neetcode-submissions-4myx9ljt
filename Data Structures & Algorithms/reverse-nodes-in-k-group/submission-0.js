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
     * @param {ListNode} head
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        const reverse = (previous, list, no_of_nodes) => {
            let next = null,
                curr = list,
                prev = null;
            while (no_of_nodes > 0) {
                next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
                no_of_nodes -= 1;
            }
            previous.next = prev;
            list.next = curr; //problem
            return [list, curr];
        };
        //min k = 1 and n = 1
        const dummy = new ListNode(-1, head);
        let curr = head;
        let size = 0;
        while (curr) {
            size += 1;
            curr = curr.next;
        }
        const pairs_to_reverse = Math.floor(size / k);
        const total_nodes_to_reverse = pairs_to_reverse * k;

        let prev = dummy,
            start = dummy.next;
        for (let i = 0; i < pairs_to_reverse; i++) {
            const res = reverse(prev, start, k);
            prev = res[0];
            start = res[1];
        }
        return dummy.next;
    }
}
