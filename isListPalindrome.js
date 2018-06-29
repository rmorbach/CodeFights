/*
    Given a singly linked list of integers, determine whether or not it's a palindrome.

    Example

    - For l = [0, 1, 0], the output should be
        isListPalindrome(l) = true;
    - For l = [1, 2, 2, 3], the output should be
        isListPalindrome(l) = false.
    
    Input/Output

        [execution time limit] 4 seconds (js)

        [input] linkedlist.integer l

        A singly linked list of integers.

        Guaranteed constraints:
        0 ≤ list size ≤ 5 · 105,
        -109 ≤ element value ≤ 109.

        [output] boolean

         Return true if l is a palindrome, otherwise return false.
*/

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
    
    try {
        l.toJSON();
    }catch(e) {
        return true;
    }
    
    if (l.toJSON().toString() == l.toJSON().reverse().toString()) {
         return true;
    }
    return false
}
