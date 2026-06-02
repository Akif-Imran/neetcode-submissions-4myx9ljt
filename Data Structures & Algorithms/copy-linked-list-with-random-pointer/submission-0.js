// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        //Time: O(n) 2 passes
        //Space: O(n) one map
        const map = new Map([[null, null]]);

        let curr = head;
        while (curr) {
            map.set(curr, new Node(curr.val, null, null));
            curr = curr.next;
        }

        curr = head;
        while (curr) {
            const node = map.get(curr);
            node.next = map.get(curr.next);
            node.random = map.get(curr.random);
            curr = curr.next;
        }
        return map.get(head);
    }
}
