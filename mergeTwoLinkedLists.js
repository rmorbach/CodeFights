/*
    Given two singly linked lists sorted in non-decreasing order, your task is to merge them.
    In other words, return a singly linked list, also sorted in non-decreasing order,
    that contains the elements from both original lists.
    
    Example

    - For l1 = [1, 2, 3] and l2 = [4, 5, 6], the output should be
        mergeTwoLinkedLists(l1, l2) = [1, 2, 3, 4, 5, 6];
    - For l1 = [1, 1, 2, 4] and l2 = [0, 3, 5], the output should be
        mergeTwoLinkedLists(l1, l2) = [0, 1, 1, 2, 3, 4, 5].
    
    Input/Output

        [execution time limit] 4 seconds (js)

        [input] linkedlist.integer l1

        A singly linked list of integers.

    Guaranteed constraints:
        0 ≤ list size ≤ 104,
        -109 ≤ element value ≤ 109.

    - [input] linkedlist.integer l2

        A singly linked list of integers.

    Guaranteed constraints:
        0 ≤ list size ≤ 104,
        -109 ≤ element value ≤ 109.

    - [output] linkedlist.integer

        A list that contains elements from both l1 and l2, sorted in non-decreasing order.
*/



// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function mergeTwoLinkedLists(l1, l2) {

    var mergedList = [];

    var l1Next = l1;
    var l2Next = l2;

    while (true) {

        if (l1Next == null && l2Next == null) {
            break;
        }
        if (!l1Next) {
            mergedList = addNodeToMergedList(l2Next, mergedList)
            l2Next = l2Next.next
            continue;
        }
        if (!l2Next) {
            mergedList = addNodeToMergedList(l1Next, mergedList)
            l1Next = l1Next.next
            continue;
        }
        if (l1Next.value <= l2Next.value) {
            mergedList = addNodeToMergedList(l1Next, mergedList)
            l1Next = l1Next.next
        } else {
            mergedList = addNodeToMergedList(l2Next, mergedList)
            l2Next = l2Next.next
        }
    }
    return (mergedList.length > 0) ? mergedList[0] : []
}

function addNodeToMergedList(node, mergedList) {
    var nd = new ListNode(node.value)

    if (mergedList.length > 0) {
        mergedList[mergedList.length - 1].next = nd;
    }
    mergedList.push(nd)

    return mergedList
}
