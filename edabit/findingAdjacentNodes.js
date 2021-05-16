const isAdjacent = (matrix, node1, node2) => {
  return matrix[node1][node2] > 0 && matrix[node2][node1] > 0
}

module.exports = isAdjacent;

/* pseudocode
check if matrix[node1][node2] is truthy
check if matrix[node2][node1] is truthy
return the result if both are truthy.
*/
