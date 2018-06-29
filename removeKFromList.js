/*
    Given a singly linked list of integers l and an integer k, remove all elements from list l
    that have a value equal to k.

    Example

    - For l = [3, 1, 2, 3, 4, 5] and k = 3, the output should be
        removeKFromList(l, k) = [1, 2, 4, 5];
    - For l = [1, 2, 3, 4, 5, 6, 7] and k = 10, the output should be
        removeKFromList(l, k) = [1, 2, 3, 4, 5, 6, 7].
    
    Input/Output

        [execution time limit] 4 seconds (js)

        [input] linkedlist.integer l

        A singly linked list of integers.

        Guaranteed constraints:
        0 ≤ list size ≤ 105,
        -1000 ≤ element value ≤ 1000.

        [input] integer k

        An integer.

        Guaranteed constraints:
        -1000 ≤ k ≤ 1000.

        [output] linkedlist.integer

        Return l with all the values equal to k removed
*/


// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {    
    
    try {
        lJSON = l.toJSON();
    }catch(e) {
        return l;
    }
    var aux = l;
    var prox = l.next
    var ret = []    
    do {               
        if (aux.value !== k) {
            if (ret.length > 0) {
                ret[ret.length - 1].next = aux;
            }            
            ret.push(aux);            
        } else {
            if (ret.length > 0) {
                ret[ret.length - 1].next = null;
            } 
        }       
        aux = prox;      
        if (prox != null) {
            prox = prox.next;          
        }        
    } while (aux != null);
    return (ret.length > 0) ? ret[0] : []
        
}