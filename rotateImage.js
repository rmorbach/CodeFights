/**
 You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).
  
  Example:
  
  For 
        a = [[1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]]
   the output should be

   rotateImage(a) =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]    
    
 Input/Output

    [execution time limit] 4 seconds (js)

    [input] array.array.integer a

    Guaranteed constraints:
       1 ≤ a.length ≤ 100,
       a[i].length = a.length,
       1 ≤ a[i][j] ≤ 104.
     
       [output] array.array.integer
 */

function rotateImage(a) {
    var rotatedMatrix = []
    for (var i = a.length - 1; i >= 0; i--) {
        var newArr = [];
        for (var j = 0; j < a[i].length; j++) {
            newArr.push(a[j][i])
        }
        newArr.reverse();
        rotatedMatrix.push(newArr)
    }
    return rotatedMatrix.reverse()
}