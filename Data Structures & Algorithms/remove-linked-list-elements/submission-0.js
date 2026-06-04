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
     * @param {number} val
     * @return {ListNode}
     */
    removeElements(head, val) {
        const dummy = new ListNode(0, head);
        let curr = head;
        let prev = dummy;
        while (curr) {
            if (curr.val !== val) {
                prev = curr;
                curr = curr.next;
                continue;
            }
            prev.next = curr.next;
            curr = curr.next;
        }
        return dummy.next;
    }
}
