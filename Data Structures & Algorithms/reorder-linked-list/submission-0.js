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
     * @return {void}
     */
    reorderList(head) {
        //[1,2,3,4,5,6]
        //[1,2,3] //start till middle
        //[6,5,4] // reversed from middle
        //
        if (!head.next) return head;
        let slow = head,
            fast = head,
            prev = head;
        while (fast && fast.next) {
            prev = slow;
            slow = slow.next;
            fast = fast.next?.next;
        }
        prev.next = null;
        prev = null;
        let next = null,
            curr = slow;
        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        let a_next = head;
        let a_curr = head;
        let b_next = prev;
        let b_curr = prev;
        while (a_curr) {
            a_next = a_curr.next;
            b_next = b_curr.next;
            a_curr.next = b_curr;
            if (a_next) b_curr.next = a_next;
            a_curr = a_next;
            b_curr = b_next;
        }
        return head;
    }
}
