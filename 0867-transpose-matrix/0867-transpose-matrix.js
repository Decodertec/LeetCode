/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;

    let result = [];
    for(let j=0; j<cols; j++){
        let row = [];

        for(let i=0; i< rows; i++){
            row.push(matrix[i][j]);
        }
        result.push(row);
    }
    return result;
    
};