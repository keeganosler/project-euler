function maximumPathSumI(triangle) {
  var maxSum = 0
  for (let i=0; i<triangle.length; i++) {
    maxSum = maxSum + Math.max(...triangle[i])
    console.log(maxSum)
  }
}

const testTriangle = [[3, 0, 0, 0],
                      [7, 4, 0, 0],
                      [2, 4, 6, 0],
                      [8, 5, 9, 3]];

maximumPathSumI(testTriangle);
