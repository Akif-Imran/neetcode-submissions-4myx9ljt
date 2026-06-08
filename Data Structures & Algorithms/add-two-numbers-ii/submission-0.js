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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        const reverse = (head) => {
            let prev = null,
                curr = head,
                next = null;
            while (curr) {
                next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            return prev;
        };
        const r_l1 = reverse(l1);
        const r_l2 = reverse(l2);

        const dummy = new ListNode();
        let sum_curr = dummy;
        let l1_curr = r_l1;
        let l2_curr = r_l2;
        let carry = 0;

        while (l1_curr || l2_curr || carry) {
            const sum = (l1_curr?.val ?? 0) + (l2_curr?.val ?? 0) + carry;
            carry = Math.floor(sum / 10);
            sum_curr.next = new ListNode(sum % 10, null);
            l1_curr = l1_curr?.next;
            l2_curr = l2_curr?.next;
            sum_curr = sum_curr.next;
        }
        return reverse(dummy.next);
    }
}
