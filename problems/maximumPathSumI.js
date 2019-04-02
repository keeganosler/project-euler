function maximumPathSumI(triangle) {
  var maxSum = 0
  maxSum = maxSum + triangle[0][0] + Math.max(triangle[1][0], triangle[1][1])
  for (let i=2; i<triangle.length; i++) {
    maxSum = maxSum + Math.max(triangle[i][i-1], triangle[i][i-2])
  }
  return maxSum
}

const testTriangle = [[3, 0, 0, 0],
                      [7, 4, 0, 0],
                      [2, 4, 6, 0],
                      [8, 5, 9, 3]];

maximumPathSumI(testTriangle);
