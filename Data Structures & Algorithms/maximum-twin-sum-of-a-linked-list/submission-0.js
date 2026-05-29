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
     * @return {number}
     */
    pairSum(head) {
        let fast = head,
            slow = head;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }

        let prev = null,
            next = null,
            curr = slow;

        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        let first = head,
            second = prev,
            res = 0;
        while (second) {
            res = Math.max(res, first.val + second.val);
            first = first.next;
            second = second.next;
        }
        return res;
    }
}
