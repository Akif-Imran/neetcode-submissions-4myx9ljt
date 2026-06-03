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
     * @param {number} left
     * @param {number} right
     * @return {ListNode}
     */
    reverseBetween(head, left, right) {
        head = new ListNode(-600, head);
        let l = head;
        let r = head;
        while (left > 1) {
            l = l.next;
            left -= 1;
        }
        while (right > 0) {
            r = r.next;
            right -= 1;
        }
        let stop = r.next;
        let prev = r.next,
            curr = l.next,
            next = null;
        while (curr != stop) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        l.next = r;
        return head.next;
    }
}
