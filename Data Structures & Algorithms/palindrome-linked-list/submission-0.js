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
     * @return {boolean}
     */
    isPalindrome(head) {
        let slow = head,
            fast = head;
        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        let prev = null,
            nxt = null,
            curr = slow;
        //reverse from middle
        while (curr) {
            nxt = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nxt;
        }
        let first = head,
            second = prev;
        while (second) {
            if (first.val !== second.val) {
                return false;
            }
            first = first.next;
            second = second.next;
        }
        return true;
    }
}
