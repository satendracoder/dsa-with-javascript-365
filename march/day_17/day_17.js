var reverseList = function(head) {
  let prev = null;
  let curr = head;

  while (curr) {
    let next = curr.next; // store next
    curr.next = prev;     // reverse link
    prev = curr;          // move prev
    curr = next;          // move curr
  }

  return prev;
};
