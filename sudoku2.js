/*  
    Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way
    that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all
    of the numbers from 1 to 9 one time.

    Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle
    according to the layout rules described above. Note that the puzzle represented by grid does not have to be
    solvable.

    Example

    - For
        grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
                ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
                ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
                ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
                ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
                ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
                ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
                ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
                ['.', '.', '.', '5', '.', '.', '.', '7', '.']]

    the output should be
        sudoku2(grid) = true;

    - For

        grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
                ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
                ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
                ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
                ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
                ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
                ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
                ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
                ['.', '2', '.', '.', '3', '.', '.', '.', '.']]
    
    the output should be
        sudoku2(grid) = false.

    The given grid is not correct because there are two 1s in the second column. 
    Each column, each row, and each 3 × 3 subgrid can only contain the numbers 1 through 9 one time.

    Input/Output

        [execution time limit] 4 seconds (js)

        [input] array.array.char grid

        A 9 × 9 array of characters, in which each character is either a digit from '1' to '9' or a period '.'.

        [output] boolean

        Return true if grid represents a valid Sudoku puzzle, otherwise return false.
                
*/

function sudoku2(grid) {
    if (!checkLines(grid)) {
        return false
    }
    var rotated = rotate(grid);
    if (!checkLines(rotated)) {
        return false
    }    
    var subgrids = subgrid(grid);    
    for (var i=0; i<subgrids.length; i++) {        
        if (!checkSubgrid(subgrids[i])) {            
            return false;
        }   
    }
        
    return true
}

function checkLines(grid) {
    for (var line=0; line<grid.length; line++){
        var lineReduced = grid[line].filter(function(v) { return v != "."})
        for (var item=0; item<lineReduced.length; item++) {            
            if (lineReduced.indexOf(lineReduced[item]) != item && lineReduced.indexOf(lineReduced[item]) != -1) {                
                return false
            }            
        }        
    }
    return true
}

function rotate(a) {
    var rotatedMatrix = []
    for (var i=a.length-1; i>=0; i--) {        
        var newArr = [];
        for(var j=0; j<a[i].length; j++){
            newArr.push(a[j][i])
        }
        newArr.reverse();
        rotatedMatrix.push(newArr)        
    }
    return rotatedMatrix.reverse()	
}

function subgrid(grid) {
    var allSubgrids = []
    var subgrid = []
    var counter = 1;

    var length = grid[0].length / 3;

    var sectionCounter = 0;

    for (var k = 0; k < length; k++) {
        for (var line = 0; line < grid.length; line++) {
            var row = []
            for (var item = sectionCounter; item < sectionCounter + 3; item++) {
                subgrid.push(grid[line][item])
            }            
            if (counter % 3 == 0) {
                allSubgrids.push(subgrid)
                subgrid = []
            }
            counter++;
        }
        sectionCounter = sectionCounter + 3
    }
    return allSubgrids
}

function checkSubgrid(subgrid) {    
    var filtered = subgrid.filter(function (v) { return v != "." })    
    for (var i=0; i<filtered.length; i++) {
        if (filtered.indexOf(filtered[i]) != i && filtered.indexOf(filtered[i]) != -1){         
            return false
        }
    }
    return true
}