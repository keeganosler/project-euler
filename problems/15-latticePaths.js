function latticePaths(gridSize) {
  var arr = new Array(gridSize+1)
  for (var i=0; i<=gridSize; i++) {
    arr[i] = new Array(gridSize + 1).fill(0)
  }
  arr[0][0] = 1
  for (var i =0; i<=gridSize; i++) {
    for (var j=0; j<=gridSize; j++) {
      if (i) {
        arr[i][j] += arr[i-1][j]
      }
      if (j) {
        arr[i][j] += arr[i][j-1]
      }
    }
  }
  return arr[gridSize][gridSize]
}

latticePaths(4);
