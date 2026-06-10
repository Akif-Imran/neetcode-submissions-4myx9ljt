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
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    getIntersectionNode(headA, headB) {
        let curr = headA;
        //find the last node of list A
        while (curr.next) {
            curr = curr.next;
        }
        //make the list A circular
        curr.next = headA;

        //if the fast and slow meet then a cycle exists otherwise the list were not connected (at the common node) return null
        let slow = headB,
            fast = headB;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) break;
        }
        if (fast === null) return null;

        //since at this point we know a cycle exists, (list are conencted a a common node)
        //the common node is equidistance from the intersection node and the starting node (headB)
        let slow2 = headB;
        do {
            slow = slow.next;
            slow2 = slow2.next;
        } while (slow !== slow2);

        curr.next = null; // return the list to original state
        return slow;
    }
}
