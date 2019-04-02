function maximumPathSumI(triangle) {
  var maxSum = 0
  var triRow = []
  for (let i=0; i<triangle.length; i++) {
    if (i===0) {
      maxSum = maxSum + triangle[0][0]
    } else {
      maxSum = maxSum + Math.max(triangle[i][i], triangle[i][i+1])
    }
    console.log(maxSum)
  }
}

const testTriangle = [[3, 0, 0, 0],
                      [7, 4, 0, 0],
                      [2, 4, 6, 0],
                      [8, 5, 9, 3]];

maximumPathSumI(testTriangle);
