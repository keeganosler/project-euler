function sumSquareDifference(n) {
  let sumSquares=0
  let sums=0
  let squareSums
  let diff
  for(let i=0; i<=n; i++){
    sumSquares=sumSquares+(i*i)
    sums=sums+i
  }
  squareSums=sums*sums
  diff = squareSums - sumSquares
  return diff
}

sumSquareDifference(100);
