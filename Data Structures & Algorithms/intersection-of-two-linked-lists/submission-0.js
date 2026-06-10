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
        const set = new Set();

        let curr = headA;
        while (curr) {
            set.add(curr);
            curr = curr.next;
        }
        curr = headB;
        while (curr) {
            if (set.has(curr)) {
                return curr;
            }
            set.add(curr);
            curr = curr.next;
        }
        return null;
    }
}
