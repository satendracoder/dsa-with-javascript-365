var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  // Move fast n steps ahead
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // Move both pointers
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  // Remove node
  slow.next = slow.next.next;

  return dummy.next;
};
