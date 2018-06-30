/**
    You're given 2 huge integers represented by linked lists. Each linked list element is a number from 0 to 9999
    that represents a number with exactly 4 digits. The represented number might have leading zeros.
    Your task is to add up these huge integers and return the result in the same format.


    Example

    - For a = [9876, 5432, 1999] and b = [1, 8001], the output should be
        addTwoHugeNumbers(a, b) = [9876, 5434, 0].

        Explanation: 987654321999 + 18001 = 987654340000.

    - For a = [123, 4, 5] and b = [100, 100, 100], the output should be
        addTwoHugeNumbers(a, b) = [223, 104, 105].

        Explanation: 12300040005 + 10001000100 = 22301040105.

    Input/Output

        [execution time limit] 4 seconds (js)

        [input] linkedlist.integer a

        The first number, without its leading zeros.

    Guaranteed constraints:
        0 ≤ a size ≤ 104,
        0 ≤ element value ≤ 9999.

        [input] linkedlist.integer b

        The second number, without its leading zeros.

    Guaranteed constraints:
        0 ≤ b size ≤ 104,
        0 ≤ element value ≤ 9999.

        [output] linkedlist.integer

    The result of adding a and b together, returned without leading zeros in the same format.
 */



// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function addTwoHugeNumbers(a, b) {
            
    var toReverse = a;
    var original = b;
    if (a.toJSON().length <= b.toJSON().length) {
        toReverse = b;
        original = a;
    }
    
    var reversed = reversedList(toReverse);
    original = reversedList(original)
    
    var reversedNext = reversed;
    
    var originalNext = original;

    var summedList = null; 
   
    var tempSummedList;
    
    var rest = 0;
    
    while (reversedNext != null) {
                
        var originalValue = (originalNext && originalNext.value) ? originalNext.value : 0;
        var summed = (reversedNext.value + originalValue + rest);        
        if (summed.toString().length > 4) {
            rest = parseInt(summed.toString().substr(0, summed.toString().length - 4))        
            summed = parseInt(summed.toString().substr(summed.toString().length - 4, summed.toString().length));            
        } else {            
            rest = 0;
        }
        
        if (!summedList) {
            summedList = new ListNode(summed)
            tempSummedList = summedList
        } else {                        
            tempSummedList.next = new ListNode(summed)
            tempSummedList = tempSummedList.next
        }
        reversedNext = reversedNext.next;
        if (reversedNext == null) {
            tempSummedList.next = null;
            if (rest > 0) {
                var restNode = new ListNode(rest);                
                tempSummedList.next = restNode
            }
        } 
        originalNext = (originalNext && originalNext.next) ? originalNext.next : null                        
    }
                
    return reversedList(summedList);
    
}

function reversedList(l) {
    var next = l;
    var allNodes = [next]
    while (next != null) {        
        next = next.next; 
        if (next)
            allNodes.push(next)
    }        
    var reversedList = allNodes.pop();     
    var temp = reversedList;
    for (var i=allNodes.length-1; i>=0; i--) {      
        temp.next = allNodes[i];        
        temp = allNodes[i]      
        if (i == 0) {
            temp.next = null
        }
    }          
    return reversedList
}
