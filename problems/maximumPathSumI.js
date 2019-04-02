function maximumPathSumI(triangle) {
  var maxSum = 0
  /*for (let i=0; i<triangle.length; i++) {
    if (i===0) {
      maxSum = maxSum + triangle[0][0]
    } 
    console.log('i', i)
    maxSum = maxSum + Math.max(triangle[i][i], triangle[i][i+1])
    console.log('sum', maxSum)
  }*/
  maxSum = maxSum + triangle[0][0] + Math.max(triangle[1][0], triangle[1][1])
  console.log(maxSum)
  for (let i=2; i<triangle.length; i++) {
    maxSum = maxSum + Math.max(triangle[i][i-1], triangle[i][i-2])
    console.log(maxSum)
  }
  return maxSum
}

const testTriangle = [[3, 0, 0, 0],
                      [7, 4, 0, 0],
                      [2, 4, 6, 0],
                      [8, 5, 9, 3]];

maximumPathSumI(testTriangle);
